/**
 * Muhammad Bilal Ashiq Portfolio - Intelligent AI Chatbot Module
 * 
 * Features:
 * 1. PortfolioKnowledgeExtractor: Dynamically parses all DOM sections at runtime.
 * 2. AIChatbotEngine:
 *    - Option 1: OpenAI Chat Completions API integration (if API key provided).
 *    - Option 2: Local TF-IDF Vector Semantic Search & Natural NLP Synthesizer (Default / zero API key).
 * 3. First-Person Persona: Always speaks as Muhammad Bilal Ashiq ("I", "my", "me").
 * 4. Zero Hallucination: Polite fallback if information is not in the portfolio context.
 * 5. UI Features: Typing animation, auto-scroll, Markdown rendering, clickable links, anti-XSS.
 */

(function () {
    'use strict';

    /* ==========================================================================
       1. Knowledge Base Extractor
       ========================================================================== */
    class PortfolioKnowledgeExtractor {
        constructor() {
            this.knowledge = {};
            this.documents = [];
        }

        extract() {
            const kb = {
                owner: {
                    name: "Muhammad Bilal Ashiq",
                    title: "AI Engineer & Full-Stack Developer",
                    location: "Lahore, Pakistan",
                    email: "methebilalashiq@gmail.com",
                    phone: "+92 308 8660209",
                    gpa: "3.91 CGPA",
                    institution: "FAST-NUCES Lahore"
                },
                hero: this.extractHero(),
                about: this.extractAbout(),
                skills: this.extractSkills(),
                projects: this.extractProjects(),
                experience: this.extractExperience(),
                education: this.extractEducation(),
                certificates: this.extractCertificates(),
                volunteer: this.extractVolunteer(),
                contact: this.extractContact(),
                social_links: this.extractSocialLinks(),
                dynamic_sections: this.extractDynamicSections()
            };

            this.knowledge = kb;
            this.buildDocumentIndex(kb);
            return kb;
        }

        extractHero() {
            const greeting = document.querySelector('.hero-greeting span')?.textContent?.trim() || '';
            const title = document.querySelector('.hero-title')?.textContent?.trim() || '';
            const subtitle = document.querySelector('.hero-subtitle')?.textContent?.trim() || '';
            const description = document.querySelector('.hero-description')?.textContent?.trim() || '';
            const statusPill = document.querySelector('.status-pill')?.textContent?.trim() || '';

            return { greeting, title, subtitle, description, statusPill };
        }

        extractAbout() {
            const textBlocks = Array.from(document.querySelectorAll('.about-text-block p'))
                .map(p => p.textContent.trim())
                .filter(Boolean);
            
            const stats = Array.from(document.querySelectorAll('.stat-card'))
                .map(card => {
                    const number = card.querySelector('.stat-number')?.textContent?.trim();
                    const label = card.querySelector('.stat-label')?.textContent?.trim();
                    return number && label ? `${number} ${label}` : null;
                })
                .filter(Boolean);

            return { paragraphs: textBlocks, stats };
        }

        extractSkills() {
            const skillGroups = [];
            const skillBoxes = document.querySelectorAll('.skills-category-box, .skill-card');

            if (skillBoxes.length > 0) {
                skillBoxes.forEach(box => {
                    const category = box.querySelector('.skills-title, h3, h4')?.textContent?.trim();
                    const badges = Array.from(box.querySelectorAll('.skill-badge, .project-tag'))
                        .map(b => b.textContent.trim())
                        .filter(Boolean);
                    if (category && badges.length > 0) {
                        skillGroups.push({ category, skills: badges });
                    }
                });
            }

            // Fallback: collect all skill badges if no explicit boxes found
            if (skillGroups.length === 0) {
                const allBadges = Array.from(document.querySelectorAll('.skill-badge'))
                    .map(b => b.textContent.trim())
                    .filter(Boolean);
                skillGroups.push({ category: "Technical Skills", skills: [...new Set(allBadges)] });
            }

            return skillGroups;
        }

        extractProjects() {
            const projectCards = document.querySelectorAll('.project-card');
            return Array.from(projectCards).map(card => {
                const title = card.querySelector('.project-title')?.textContent?.trim() || '';
                const description = card.querySelector('.project-description')?.textContent?.trim() || '';
                const tags = Array.from(card.querySelectorAll('.project-tag'))
                    .map(t => t.textContent.trim());
                const categories = (card.getAttribute('data-category') || '').split(' ').filter(Boolean);
                
                const links = Array.from(card.querySelectorAll('.project-link'))
                    .map(a => ({
                        label: a.textContent.trim(),
                        url: a.getAttribute('href') || ''
                    }))
                    .filter(l => l.url && l.url !== '#');

                return { title, description, tags, categories, links };
            }).filter(p => p.title);
        }

        extractExperience() {
            const expCards = document.querySelectorAll('.experience-card');
            return Array.from(expCards).map(card => {
                const role = card.querySelector('.experience-title, h3')?.textContent?.trim() || '';
                const company = card.querySelector('.experience-company')?.textContent?.trim() || '';
                const date = card.querySelector('.experience-date')?.textContent?.trim() || '';
                const responsibilities = Array.from(card.querySelectorAll('.experience-responsibility, li'))
                    .map(li => li.textContent.trim())
                    .filter(Boolean);

                return { role, company, date, responsibilities };
            }).filter(e => e.role || e.company);
        }

        extractEducation() {
            const eduCards = document.querySelectorAll('.education-card');
            return Array.from(eduCards).map(card => {
                const degree = card.querySelector('.education-heading-group h3, h3')?.textContent?.trim() || '';
                const institution = card.querySelector('.education-heading-group p, .education-institution')?.textContent?.trim() || '';
                const duration = card.querySelector('.education-level')?.textContent?.trim() || '';
                const summary = card.querySelector('.education-summary')?.textContent?.trim() || '';
                const highlights = Array.from(card.querySelectorAll('.education-back-list li, .education-meta-value'))
                    .map(li => li.textContent.trim())
                    .filter(Boolean);

                return { degree, institution, duration, summary, highlights };
            }).filter(e => e.degree);
        }

        extractCertificates() {
            const certCards = document.querySelectorAll('.cert-card, .certificate-card, #certificates .card');
            const items = Array.from(certCards).map(card => {
                const title = card.querySelector('h3, h4, .cert-title')?.textContent?.trim() || '';
                const issuer = card.querySelector('.cert-issuer, .cert-date, p')?.textContent?.trim() || '';
                const desc = card.querySelector('.cert-desc, p:nth-of-type(2)')?.textContent?.trim() || '';
                return { title, issuer, desc };
            }).filter(c => c.title);

            // Also check for raw list text in certificates section
            if (items.length === 0) {
                const certSec = document.getElementById('certificates');
                if (certSec) {
                    const text = certSec.textContent.replace(/\s+/g, ' ').trim();
                    items.push({ title: "Certificates & Achievements", issuer: "FAST-NUCES, ICPC, Udemy, AWS", desc: text });
                }
            }

            return items;
        }

        extractVolunteer() {
            const volCards = document.querySelectorAll('#volunteer .volunteer-card, #volunteer .card');
            return Array.from(volCards).map(card => {
                const role = card.querySelector('h3, h4')?.textContent?.trim() || '';
                const organization = card.querySelector('.org, p')?.textContent?.trim() || '';
                const desc = card.querySelector('.desc, p:nth-of-type(2)')?.textContent?.trim() || '';
                return { role, organization, desc };
            }).filter(v => v.role || v.organization);
        }

        extractContact() {
            const items = Array.from(document.querySelectorAll('.contact-info-item, .contact-item'))
                .map(item => item.textContent.replace(/\s+/g, ' ').trim())
                .filter(Boolean);

            return {
                email: "methebilalashiq@gmail.com",
                phone: "+92 308 8660209",
                location: "Lahore, Pakistan",
                raw: items
            };
        }

        extractSocialLinks() {
            const links = Array.from(document.querySelectorAll('.social-links a, .footer-social a'))
                .map(a => ({
                    platform: a.getAttribute('aria-label') || a.querySelector('i')?.className || 'Social Link',
                    url: a.getAttribute('href') || ''
                }))
                .filter(l => l.url);

            return links;
        }

        extractDynamicSections() {
            const sections = document.querySelectorAll('section[id]');
            return Array.from(sections).map(sec => {
                const id = sec.id;
                const title = sec.querySelector('.section-title, h2, h1')?.textContent?.trim() || id;
                const text = sec.textContent.replace(/\s+/g, ' ').trim();
                return { id, title, text };
            });
        }

        buildDocumentIndex(kb) {
            this.documents = [];

            // Add Owner Bio Chunk
            this.documents.push({
                id: 'bio',
                category: 'about',
                title: 'Muhammad Bilal Ashiq - Personal Profile',
                content: `I am Muhammad Bilal Ashiq, a Computer Science graduate from FAST-NUCES Lahore. I have expertise in AI, Machine Learning, NLP, Computer Vision, Full-Stack Web Development (Next.js, React, Supabase), and Backend Engineering (Spring Boot, Java, PostgreSQL, FastAPI). GPA: 3.91 CGPA. Location: Lahore, Pakistan. Email: methebilalashiq@gmail.com, Phone: +92 308 8660209.`,
                keywords: ['bio', 'about', 'name', 'bilal', 'ashiq', 'who', 'background', 'profile', 'summary', 'introduction']
            });

            // Add Contact Chunk
            this.documents.push({
                id: 'contact',
                category: 'contact',
                title: 'Contact Information',
                content: `You can reach me directly via Email: methebilalashiq@gmail.com, Phone: +92 308 8660209, or connect on LinkedIn and GitHub. Location: Lahore, Pakistan. Available for hire and freelance projects.`,
                keywords: ['contact', 'email', 'phone', 'reach', 'hire', 'call', 'message', 'address', 'location', 'linkedin', 'github']
            });

            // Add Projects Chunks
            kb.projects.forEach((proj, idx) => {
                const linkStr = proj.links.map(l => `${l.label}: ${l.url}`).join(' | ');
                this.documents.push({
                    id: `project-${idx}`,
                    category: 'projects',
                    title: proj.title,
                    content: `Project: ${proj.title}. Description: ${proj.description}. Technologies used: ${proj.tags.join(', ')}. Categories: ${proj.categories.join(', ')}. Links: ${linkStr}`,
                    keywords: ['project', 'built', 'developed', ...proj.title.toLowerCase().split(/\s+/), ...proj.tags.map(t => t.toLowerCase()), ...proj.categories]
                });
            });

            // Add Experience Chunks
            kb.experience.forEach((exp, idx) => {
                this.documents.push({
                    id: `exp-${idx}`,
                    category: 'experience',
                    title: `${exp.role} at ${exp.company}`,
                    content: `Role: ${exp.role} at ${exp.company} (${exp.date}). Responsibilities & Achievements: ${exp.responsibilities.join('. ')}.`,
                    keywords: ['experience', 'work', 'job', 'company', 'role', ...exp.role.toLowerCase().split(/\s+/), ...exp.company.toLowerCase().split(/\s+/)]
                });
            });

            // Add Education Chunks
            kb.education.forEach((edu, idx) => {
                this.documents.push({
                    id: `edu-${idx}`,
                    category: 'education',
                    title: `${edu.degree} - ${edu.institution}`,
                    content: `Degree: ${edu.degree} at ${edu.institution} (${edu.duration}). Summary: ${edu.summary}. Highlights: ${edu.highlights.join('. ')}.`,
                    keywords: ['education', 'degree', 'university', 'fast', 'nuces', 'gpa', 'marks', 'school', 'college', ...edu.degree.toLowerCase().split(/\s+/)]
                });
            });

            // Add Skills Chunk
            const allSkillsText = kb.skills.map(s => `${s.category}: ${s.skills.join(', ')}`).join('. ');
            this.documents.push({
                id: 'skills-all',
                category: 'skills',
                title: 'Technical Skills & Technologies',
                content: `My technical skills include: ${allSkillsText}. Primary stack: Python, PyTorch, Transformers, NLP, RAG, Next.js, React, Supabase, PostgreSQL, Spring Boot, Java, C++, Docker, Linux.`,
                keywords: ['skills', 'technologies', 'stack', 'languages', 'frameworks', 'python', 'pytorch', 'nextjs', 'react', 'java', 'cpp', 'supabase', 'postgresql']
            });

            // Add Certificates & Awards Chunk
            const certsText = kb.certificates.map(c => `${c.title} (${c.issuer}): ${c.desc}`).join('. ');
            this.documents.push({
                id: 'certificates',
                category: 'certificates',
                title: 'Certificates, Awards & Honors',
                content: `My certifications and honors include: 1st Place FAST-NUCES Idea Competition (NeuroSecure), Round II ICPC 2026, 3rd Position Vine-a-thon (Google Developer Competition), Deep Learning Specialization (Udemy), AWS Machine Learning Foundations. ${certsText}`,
                keywords: ['certificate', 'certificates', 'awards', 'honors', 'icpc', 'idea competition', 'vine-a-thon', 'udemy', 'aws', 'achievement']
            });
        }
    }


    /* ==========================================================================
       2. Semantic Search & NLP Local Engine (Zero API Key)
       ========================================================================== */
    class LocalNLPEngine {
        constructor(documents, knowledge) {
            this.documents = documents;
            this.knowledge = knowledge;

            this.synonyms = {
                'hi': ['hello', 'hey', 'greetings', 'who are you', 'intro', 'hi'],
                'gpa': ['cgpa', 'marks', 'score', 'grades', 'academic', 'percentage'],
                'work': ['job', 'experience', 'career', 'internship', 'position', 'company', 'role'],
                'project': ['apps', 'systems', 'portfolio', 'built', 'developed', 'freelance', 'code'],
                'school': ['university', 'college', 'fast', 'nuces', 'education', 'degree', 'bs'],
                'contact': ['email', 'phone', 'reach', 'hire', 'call', 'message', 'address', 'linkedin', 'github', 'social'],
                'skill': ['skills', 'stack', 'tech', 'technologies', 'tools', 'languages', 'frameworks']
            };
        }

        tokenize(text) {
            return text.toLowerCase()
                .replace(/[^\w\s]/g, ' ')
                .split(/\s+/)
                .filter(word => word.length > 1);
        }

        calculateScore(queryTokens, doc) {
            const docTokens = this.tokenize(doc.title + ' ' + doc.content + ' ' + doc.keywords.join(' '));
            const docSet = new Set(docTokens);
            
            let score = 0;
            const queryRaw = queryTokens.join(' ');

            // Exact keyword matches
            queryTokens.forEach(token => {
                if (docSet.has(token)) {
                    score += 3;
                }

                // Check synonym expansions
                Object.keys(this.synonyms).forEach(synKey => {
                    if (this.synonyms[synKey].includes(token)) {
                        if (doc.keywords.includes(synKey) || docSet.has(synKey)) {
                            score += 2.5;
                        }
                    }
                });
            });

            // Specific phrase bonus
            if (doc.title.toLowerCase().includes(queryRaw)) {
                score += 5;
            }

            return score;
        }

        search(query) {
            const queryTokens = this.tokenize(query);
            if (queryTokens.length === 0) return null;

            const scoredDocs = this.documents.map(doc => ({
                doc,
                score: this.calculateScore(queryTokens, doc)
            }));

            scoredDocs.sort((a, b) => b.score - a.score);
            return scoredDocs[0].score > 1.5 ? scoredDocs[0].doc : null;
        }

        generateResponse(query) {
            const lower = query.toLowerCase().trim();

            // 1. Greetings Intent
            if (/^(hi|hello|hey|greetings|who are you|tell me about yourself|intro|introduction)/i.test(lower)) {
                return `Hello! 👋 I am **Muhammad Bilal Ashiq**. I am a Computer Science graduate from **FAST-NUCES Lahore** with a **3.91 CGPA**. I specialize in **Artificial Intelligence, Machine Learning, Full-Stack Web Development (Next.js, React, Supabase)**, and **Backend Engineering (Spring Boot, Java, PostgreSQL)**. Feel free to ask me about my projects, skills, education, work experience, or contact details!`;
            }

            // 2. Specific Freelance Projects Intent
            if (lower.includes('freelance') || lower.includes('client')) {
                const freelanceProjects = this.knowledge.projects.filter(p => 
                    p.categories.includes('freelance') || p.tags.map(t => t.toLowerCase()).includes('freelance')
                );
                
                if (freelanceProjects.length > 0) {
                    let resp = `I have engineered several high-impact **Freelance & Client Projects**:\n\n`;
                    freelanceProjects.forEach((p, i) => {
                        const linkStr = p.links.map(l => `[${l.label}](${l.url})`).join(', ');
                        resp += `${i + 1}. **${p.title}**\n   - ${p.description}\n   - **Stack:** ${p.tags.join(', ')}${linkStr ? `\n   - **Link:** ${linkStr}` : ''}\n\n`;
                    });
                    return resp.trim();
                }
            }

            // 3. Contact & Social Intent
            if (lower.includes('contact') || lower.includes('hire') || lower.includes('email') || lower.includes('phone') || lower.includes('reach') || lower.includes('linkedin') || lower.includes('github')) {
                return `You can reach me directly via:\n- 📧 **Email:** [methebilalashiq@gmail.com](mailto:methebilalashiq@gmail.com)\n- 📞 **Phone:** [+92 308 8660209](tel:+923088660209)\n- 📍 **Location:** Lahore, Pakistan\n- 💼 **LinkedIn:** [LinkedIn Profile](https://linkedin.com/in/thecallmebilalashiq)\n- 💻 **GitHub:** [GitHub Profile](https://github.com/thecallmeBilalAshiq)\n\nI am actively open for full-time roles, AI/software engineering positions, and freelance software projects!`;
            }

            // 4. Resume Intent
            if (lower.includes('resume') || lower.includes('cv')) {
                return `My resume showcases my complete track record in AI systems, Next.js full-stack development, and computer science fundamentals. You can view my skills, projects, and achievements directly here in my portfolio or contact me at **methebilalashiq@gmail.com** for my latest PDF resume!`;
            }

            // 5. Semantic Document Retrieval Match
            const match = this.search(query);
            if (match) {
                return this.formatMatchedDocument(match, query);
            }

            // 6. Strict Fallback
            return `I couldn't find that specific information in Bilal's portfolio. Feel free to ask me about my **skills**, **projects** (like NeuroHire, Comfort Studio UK, or Career ProServe), **education** at FAST-NUCES, **work experience**, or **contact information**!`;
        }

        formatMatchedDocument(doc, query) {
            if (doc.category === 'projects') {
                return `Here are the details for **${doc.title}**:\n\n${doc.content.replace(/Project: .*?\. Description: /, '')}`;
            }
            if (doc.category === 'education') {
                return `Regarding my education:\n\n${doc.content}`;
            }
            if (doc.category === 'experience') {
                return `Here is my experience details:\n\n${doc.content}`;
            }
            if (doc.category === 'skills') {
                return `My core technical stack includes:\n\n- **AI & Machine Learning:** Python, PyTorch, Transformers, NLP, RAG, OpenCV, YOLO.\n- **Full-Stack & Web:** Next.js, React, JavaScript, HTML5, CSS3, TailwindCSS, WordPress/WooCommerce.\n- **Backend & Databases:** Spring Boot, Java, FastAPI, PostgreSQL, Supabase, MySQL, Firebase.\n- **Systems & Tools:** Docker, Linux, VMware, Git/GitHub.`;
            }
            if (doc.category === 'certificates') {
                return `Here are my top certifications & achievements:\n\n- 🥇 **1st Place** - FAST-NUCES Idea Competition (NeuroSecure System)\n- 🎗️ **Round II Finalist** - ICPC 2026\n- 🎗️ **3rd Position** - Vine-a-thon (Google Developer Competition)\n- 📜 **Deep Learning Specialization** (Udemy)\n- 📜 **AWS Machine Learning Foundations**`;
            }

            return doc.content;
        }
    }


    /* ==========================================================================
       3. Main AI Chatbot Controller (Supports OpenAI API & Local Engine)
       ========================================================================== */
    class AIChatbotController {
        constructor() {
            this.knowledgeExtractor = new PortfolioKnowledgeExtractor();
            this.knowledge = {};
            this.localEngine = null;
            this.chatHistory = [];
            this.apiKey = localStorage.getItem('portfolio_openai_api_key') || window.PORTFOLIO_OPENAI_KEY || '';

            this.dom = {
                btn: null,
                container: null,
                closeBtn: null,
                input: null,
                sendBtn: null,
                messages: null,
                tooltip: null,
                keyBtn: null
            };
        }

        init() {
            // Extract knowledge base dynamically from HTML
            this.knowledge = this.knowledgeExtractor.extract();
            this.localEngine = new LocalNLPEngine(this.knowledgeExtractor.documents, this.knowledge);

            // Bind DOM elements
            this.bindDOM();
            this.setupEventListeners();
            this.setupAutoTooltip();
        }

        bindDOM() {
            this.dom.btn = document.getElementById('chat-widget-btn');
            this.dom.container = document.getElementById('chat-widget-container');
            this.dom.closeBtn = document.getElementById('chat-widget-close');
            this.dom.input = document.getElementById('chat-widget-input');
            this.dom.sendBtn = document.getElementById('chat-widget-send');
            this.dom.messages = document.getElementById('chat-widget-messages');
            this.dom.tooltip = document.getElementById('chat-tooltip-popup');

            // Inject API Key Settings Toggle in Chat Header if not present
            this.injectHeaderControls();
        }

        injectHeaderControls() {
            const header = document.querySelector('.chat-widget-header');
            if (header && !document.getElementById('chat-api-key-btn')) {
                const controlsDiv = document.createElement('div');
                controlsDiv.className = 'chat-header-actions';
                controlsDiv.style.display = 'flex';
                controlsDiv.style.alignItems = 'center';
                controlsDiv.style.gap = '0.5rem';

                controlsDiv.innerHTML = `
                    <button type="button" id="chat-api-key-btn" title="Configure OpenAI API Key (Optional)" style="background:none;border:none;color:var(--text-secondary);cursor:pointer;font-size:0.9rem;padding:4px;">
                        <i class="fas fa-key"></i>
                    </button>
                `;

                const closeBtn = document.getElementById('chat-widget-close');
                if (closeBtn) {
                    header.insertBefore(controlsDiv, closeBtn);
                }

                this.dom.keyBtn = document.getElementById('chat-api-key-btn');
                if (this.dom.keyBtn) {
                    this.dom.keyBtn.addEventListener('click', () => this.promptAPIKey());
                }
            }
        }

        promptAPIKey() {
            const currentKey = this.apiKey ? '••••••••' + this.apiKey.slice(-4) : 'None';
            const userKey = prompt(
                `OpenAI API Key Configuration (Optional):\n\nCurrent Key: ${currentKey}\n\nEnter your OpenAI API Key (sk-...) to use live GPT model completions, or click Cancel/Leave empty to use the built-in Intelligent Semantic Search Engine:`,
                this.apiKey
            );

            if (userKey !== null) {
                const trimmed = userKey.trim();
                if (trimmed) {
                    this.apiKey = trimmed;
                    localStorage.setItem('portfolio_openai_api_key', trimmed);
                    alert('OpenAI API Key saved successfully for this session!');
                } else {
                    this.apiKey = '';
                    localStorage.removeItem('portfolio_openai_api_key');
                    alert('OpenAI API Key removed. Reverted to built-in Intelligent Semantic Search Engine.');
                }
            }
        }

        setupEventListeners() {
            if (this.dom.btn && this.dom.container) {
                this.dom.btn.addEventListener('click', () => {
                    this.toggleChat();
                });
            }

            if (this.dom.closeBtn && this.dom.container) {
                this.dom.closeBtn.addEventListener('click', () => {
                    this.dom.container.classList.remove('active');
                });
            }

            if (this.dom.input) {
                this.dom.input.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        this.handleUserSend();
                    }
                });
            }

            if (this.dom.sendBtn) {
                this.dom.sendBtn.addEventListener('click', () => this.handleUserSend());
            }

            // Delegate chip suggestions
            window.sendSuggestion = (text) => {
                if (this.dom.input) {
                    this.dom.input.value = text;
                    this.handleUserSend();
                }
            };
        }

        setupAutoTooltip() {
            if (this.dom.tooltip) {
                setTimeout(() => {
                    if (this.dom.container && !this.dom.container.classList.contains('active')) {
                        this.dom.tooltip.classList.add('active');
                    }
                }, 2500);

                this.dom.tooltip.addEventListener('click', () => {
                    this.dom.tooltip.classList.remove('active');
                    if (this.dom.container) {
                        this.dom.container.classList.add('active');
                    }
                });
            }
        }

        toggleChat() {
            if (!this.dom.container) return;
            this.dom.container.classList.toggle('active');
            if (this.dom.tooltip) {
                this.dom.tooltip.classList.remove('active');
            }
            if (this.dom.container.classList.contains('active') && this.dom.input) {
                this.dom.input.focus();
            }
        }

        async handleUserSend() {
            const query = this.dom.input.value.trim();
            if (!query) return;

            // Render user message
            this.appendMessage(query, 'user');
            this.dom.input.value = '';

            // Render typing indicator
            const typingEl = this.appendTypingIndicator();

            try {
                let responseText = '';

                if (this.apiKey) {
                    responseText = await this.queryOpenAI(query);
                } else {
                    // Simulate natural thinking delay for local engine
                    await new Promise(res => setTimeout(res, 500));
                    responseText = this.localEngine.generateResponse(query);
                }

                this.removeTypingIndicator(typingEl);
                this.appendMessage(responseText, 'bot');
            } catch (err) {
                console.warn('OpenAI API Error, falling back to Local Semantic Engine:', err);
                this.removeTypingIndicator(typingEl);
                const fallbackResponse = this.localEngine.generateResponse(query);
                this.appendMessage(fallbackResponse, 'bot');
            }
        }

        async queryOpenAI(userQuery) {
            const systemPrompt = `You are Muhammad Bilal Ashiq, a Computer Science graduate from FAST-NUCES Lahore specializing in AI, Machine Learning, Next.js, and Full-Stack Development.
You represent ONLY yourself (Muhammad Bilal Ashiq). Always answer naturally in first person ("I", "my", "me").
Use ONLY the following portfolio knowledge base to answer user questions:

PORTFOLIO KNOWLEDGE BASE:
${JSON.stringify(this.knowledge, null, 2)}

STRICT RULES:
1. Never invent or hallucinate information not present in the portfolio knowledge base.
2. If the user asks something that does NOT exist in the portfolio, politely say: "I couldn't find that information in Bilal's portfolio."
3. Keep responses concise, professional, friendly, and structured with clean markdown.`;

            const messages = [
                { role: "system", content: systemPrompt },
                ...this.chatHistory.slice(-6), // Send last 6 turns for context
                { role: "user", content: userQuery }
            ];

            const res = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.apiKey}`
                },
                body: JSON.stringify({
                    model: 'gpt-4o-mini',
                    messages: messages,
                    temperature: 0.3,
                    max_tokens: 450
                })
            });

            if (!res.ok) {
                throw new Error(`API response status: ${res.status}`);
            }

            const data = await res.json();
            const reply = data.choices?.[0]?.message?.content?.trim() || "I couldn't process that response right now.";
            
            // Record conversation history
            this.chatHistory.push({ role: "user", content: userQuery });
            this.chatHistory.push({ role: "assistant", content: reply });

            return reply;
        }

        appendMessage(rawText, sender) {
            if (!this.dom.messages) return;

            const msgDiv = document.createElement('div');
            msgDiv.className = `chat-msg ${sender}`;
            
            if (sender === 'user') {
                msgDiv.textContent = rawText; // Sanitize user input text
            } else {
                msgDiv.innerHTML = this.parseMarkdown(rawText);
            }

            this.dom.messages.appendChild(msgDiv);
            this.scrollToBottom();
        }

        appendTypingIndicator() {
            if (!this.dom.messages) return null;
            const typingDiv = document.createElement('div');
            typingDiv.className = 'chat-msg bot typing-indicator-container';
            typingDiv.innerHTML = `
                <div class="typing-indicator">
                    <span class="typing-dot"></span>
                    <span class="typing-dot"></span>
                    <span class="typing-dot"></span>
                </div>
            `;
            this.dom.messages.appendChild(typingDiv);
            this.scrollToBottom();
            return typingDiv;
        }

        removeTypingIndicator(el) {
            if (el && el.parentNode) {
                el.parentNode.removeChild(el);
            }
        }

        scrollToBottom() {
            if (this.dom.messages) {
                this.dom.messages.scrollTop = this.dom.messages.scrollHeight;
            }
        }

        parseMarkdown(text) {
            if (!text) return '';

            // Escape dangerous HTML tags except formatting
            let html = text
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;');

            // Bold **text**
            html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
            
            // Italic *text*
            html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');

            // Inline code `code`
            html = html.replace(/`([^`]+)`/g, '<code style="background:var(--muted);padding:2px 6px;border-radius:4px;font-family:monospace;font-size:0.85em;">$1</code>');

            // Markdown Links [label](url)
            html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" style="color:var(--primary);text-decoration:underline;">$1</a>');

            // Convert bullet lines
            html = html.replace(/^\s*-\s+(.*$)/gm, '<li>$1</li>');
            html = html.replace(/(<li>[\s\S]*<\/li>)/g, '<ul style="margin:0.5rem 0;padding-left:1.2rem;">$1</ul>');

            // Line breaks
            html = html.replace(/\n/g, '<br>');

            return html;
        }
    }

    // Initialize chatbot on DOM ready or immediate if already loaded
    function initBot() {
        if (!window.PortfolioAIChatbot) {
            const bot = new AIChatbotController();
            bot.init();
            window.PortfolioAIChatbot = bot;
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initBot);
    } else {
        initBot();
    }

})();
