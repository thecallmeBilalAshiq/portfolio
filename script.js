        function scrollToTop() {
            if (typeof lenis !== 'undefined' && lenis) {
                lenis.scrollTo(0, { duration: 1.2 });
            } else {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        }

// ==========================================
        (function() {
            const video = document.getElementById('heroVideo');
            const introBtn = document.getElementById('introVideoBtn');

            function updateBtnState() {
                if (!video || !introBtn) return;
                if (video.paused || video.ended) {
                    introBtn.classList.remove('is-playing');
                    introBtn.innerHTML = '<i class="fas fa-play"></i> <span>click here for Introduction</span>';
                } else {
                    introBtn.classList.add('is-playing');
                    introBtn.innerHTML = '<i class="fas fa-pause"></i> <span>Pause Introduction</span>';
                }
            }

            if (video && introBtn) {
                introBtn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    if (video.paused) {
                        video.play();
                    } else {
                        video.pause();
                    }
                });

                video.addEventListener('play', updateBtnState);
                video.addEventListener('pause', updateBtnState);
                video.addEventListener('ended', updateBtnState);
            }
        })();

// ==========================================
        // === Lenis Smooth Scroll Engine Setup ===
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        let lenis = null;

        if (!prefersReducedMotion && typeof Lenis !== 'undefined') {
            // Prevent scroll jumps on page load / refresh
            if ('scrollRestoration' in history) {
                history.scrollRestoration = 'manual';
            }

            // Initialize Lenis with Apple / Linear / Framer style physics
            lenis = new Lenis({
                duration: 1.2,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential ease-out curve
                orientation: 'vertical',
                gestureOrientation: 'vertical',
                smoothWheel: true,
                wheelMultiplier: 1.0,
                touchMultiplier: 1.5,
                infinite: false,
            });

            // 60 FPS requestAnimationFrame loop
            function raf(time) {
                lenis.raf(time);
                requestAnimationFrame(raf);
            }
            requestAnimationFrame(raf);

            // Synchronize scroll events with AOS animations
            lenis.on('scroll', () => {
                if (typeof AOS !== 'undefined') {
                    AOS.refresh();
                }
            });

            // Recalculate document scroll height when page fully loads
            window.addEventListener('load', () => {
                lenis.resize();
            });
        }

        // Initialize AOS
        AOS.init({
            once: true,
            offset: 100,
            duration: 800
        });

        // === ABOUT SECTION: 3D Tilt Effect on Text Wrappers ===
        (function() {
            const wrappers = document.querySelectorAll('.about-text-block');
            wrappers.forEach(wrapper => {
                wrapper.addEventListener('mousemove', (e) => {
                    const rect = wrapper.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const rotateX = ((y - centerY) / centerY) * -4;
                    const rotateY = ((x - centerX) / centerX) * 4;
                    wrapper.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
                });
                wrapper.addEventListener('mouseleave', () => {
                    wrapper.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
                });
            });

            // Heading glitch burst effect  
            const heading = document.querySelector('.about-heading');
            if (heading) {
                setInterval(() => {
                    heading.style.animation = 'none';
                    heading.offsetHeight; // reflow
                    heading.style.animation = '';
                    heading.classList.add('about-glitch-burst');
                    setTimeout(() => heading.classList.remove('about-glitch-burst'), 200);
                }, 5000 + Math.random() * 3000);
            }
        })();

        // Education timeline flip behavior
        const educationCards = document.querySelectorAll('[data-education-card]');
        const isTouchDevice = window.matchMedia('(hover: none), (pointer: coarse)').matches;

        function resetEducationCards(exceptCard = null) {
            educationCards.forEach(card => {
                if (card !== exceptCard) {
                    card.classList.remove('is-flipped');
                }
            });
        }

        educationCards.forEach(card => {
            card.addEventListener('click', () => {
                if (!isTouchDevice) {
                    return;
                }

                const shouldFlip = !card.classList.contains('is-flipped');
                resetEducationCards(card);
                card.classList.toggle('is-flipped', shouldFlip);
            });

            card.addEventListener('keydown', event => {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    const shouldFlip = !card.classList.contains('is-flipped');
                    resetEducationCards(card);
                    card.classList.toggle('is-flipped', shouldFlip);
                }
            });
        });

        document.addEventListener('click', event => {
            if (isTouchDevice && !event.target.closest('[data-education-card]')) {
                resetEducationCards();
            }
        });

        // Particles.js
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#6c63ff"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#6c63ff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });

        // Custom cursor
        const cursor = document.querySelector('.cursor');
        const cursorFollower = document.querySelector('.cursor-follower');

        document.addEventListener('mousemove', function (e) {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';

            setTimeout(function () {
                cursorFollower.style.left = e.clientX + 'px';
                cursorFollower.style.top = e.clientY + 'px';
            }, 100);
        });

        document.addEventListener('mousedown', function () {
            cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
            cursorFollower.style.transform = 'translate(-50%, -50%) scale(0.8)';
        });

        document.addEventListener('mouseup', function () {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
        });

        // Hover effect on links and buttons
        const links = document.querySelectorAll('a, button, .skill-badge, .project-card');
        links.forEach(link => {
            link.addEventListener('mouseenter', function () {
                cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
                cursor.style.opacity = '0.5';
                cursorFollower.style.width = '60px';
                cursorFollower.style.height = '60px';
                cursorFollower.style.borderColor = 'var(--primary)';
            });

            link.addEventListener('mouseleave', function () {
                cursor.style.transform = 'translate(-50%, -50%) scale(1)';
                cursor.style.opacity = '0.7';
                cursorFollower.style.width = '40px';
                cursorFollower.style.height = '40px';
                cursorFollower.style.borderColor = 'var(--primary)';
            });
        });

        // Set current year in footer
        document.getElementById('current-year').textContent = new Date().getFullYear();

        // Theme Toggle (Supports both desktop and mobile buttons)
        const themeToggles = document.querySelectorAll('#theme-toggle, #theme-toggle-mobile');
        const htmlElement = document.documentElement;

        function updateThemeIcons(isDark) {
            themeToggles.forEach(btn => {
                const icon = btn ? btn.querySelector('i') : null;
                if (icon) {
                    if (isDark) {
                        icon.classList.remove('fa-moon');
                        icon.classList.add('fa-sun');
                    } else {
                        icon.classList.remove('fa-sun');
                        icon.classList.add('fa-moon');
                    }
                }
            });
        }

        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const isInitialDark = savedTheme === 'dark' || (savedTheme === null && prefersDark);

        if (isInitialDark) {
            htmlElement.classList.add('dark');
            updateThemeIcons(true);
        }

        themeToggles.forEach(btn => {
            btn.addEventListener('click', function () {
                htmlElement.classList.toggle('dark');
                const isDark = htmlElement.classList.contains('dark');
                localStorage.setItem('theme', isDark ? 'dark' : 'light');
                updateThemeIcons(isDark);
            });
        });

        // Professional Mobile Hamburger Menu & Overlay Controls
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');

        function toggleMobileMenu(open) {
            if (!mobileMenu) return;
            const isOpen = open !== undefined ? open : !mobileMenu.classList.contains('active');
            mobileMenu.classList.toggle('active', isOpen);
            if (mobileMenuOverlay) mobileMenuOverlay.classList.toggle('active', isOpen);
            document.body.classList.toggle('menu-open', isOpen);
            
            // Pause/resume Lenis scrolling when mobile drawer is open/closed
            if (typeof lenis !== 'undefined' && lenis) {
                if (isOpen) {
                    lenis.stop();
                } else {
                    lenis.start();
                }
            }

            if (mobileMenuBtn) {
                mobileMenuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
                const mobileMenuIcon = mobileMenuBtn.querySelector('i');
                if (mobileMenuIcon) {
                    if (isOpen) {
                        mobileMenuIcon.classList.remove('fa-bars');
                        mobileMenuIcon.classList.add('fa-times');
                    } else {
                        mobileMenuIcon.classList.remove('fa-times');
                        mobileMenuIcon.classList.add('fa-bars');
                    }
                }
            }
        }

        if (mobileMenuBtn) {
            mobileMenuBtn.addEventListener('click', function (e) {
                e.stopPropagation();
                toggleMobileMenu();
            });
        }

        if (mobileMenuOverlay) {
            mobileMenuOverlay.addEventListener('click', function () {
                toggleMobileMenu(false);
            });
        }

        // Close mobile menu when clicking outside
        document.addEventListener('click', function (e) {
            if (mobileMenu && mobileMenu.classList.contains('active')) {
                if (!mobileMenu.contains(e.target) && (!mobileMenuBtn || !mobileMenuBtn.contains(e.target))) {
                    toggleMobileMenu(false);
                }
            }
        });

        // Close mobile menu on Escape key press
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && mobileMenu && mobileMenu.classList.contains('active')) {
                toggleMobileMenu(false);
            }
        });

        // Close mobile menu after clicking any navigation link
        const mobileMenuLinks = mobileMenu ? mobileMenu.querySelectorAll('.nav-link') : [];
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', function () {
                toggleMobileMenu(false);
            });
        });

        // Navbar scroll effect
        const header = document.getElementById('header');
        window.addEventListener('scroll', function () {
            if (window.scrollY > 50) {
                header.classList.add('header-scrolled');
            } else {
                header.classList.remove('header-scrolled');
            }
        });

        // Active navigation link on scroll
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');

        window.addEventListener('scroll', function () {
            let current = '';

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;

                if (window.scrollY >= (sectionTop - 200)) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });

        // Smooth scrolling for navigation links via Lenis Engine
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const targetId = this.getAttribute('href');
                if (!targetId || targetId === '#') return;

                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    if (typeof lenis !== 'undefined' && lenis) {
                        lenis.scrollTo(targetElement, { offset: -80, duration: 1.2 });
                    } else {
                        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - 80;
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });

        // Form submission
        const contactForm = document.getElementById('contact-form');
        const formSuccess = document.getElementById('form-success');

        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Simulate form submission
            const submitBtn = this.querySelector('.submit-btn');
            const originalBtnText = submitBtn.innerHTML;

            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;

            // Simulate API call delay
            setTimeout(function () {
                contactForm.reset();
                formSuccess.classList.add('active');
                submitBtn.innerHTML = originalBtnText;
                submitBtn.disabled = false;

                // Hide success message after 5 seconds
                setTimeout(function () {
                    formSuccess.classList.remove('active');
                }, 5000);
            }, 1500);
        });

        // Project Filtering
        const filterButtons = document.querySelectorAll('.filter-btn');
        const projectCards = document.querySelectorAll('.project-card');

        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                button.classList.add('active');

                const filterValue = button.getAttribute('data-filter');

                projectCards.forEach(card => {
                    const cardCategories = (card.getAttribute('data-category') || '').split(' ');
                    if (filterValue === 'all' || cardCategories.includes(filterValue)) {
                        card.classList.remove('hidden');
                    } else {
                        card.classList.add('hidden');
                    }
                });

                // Refresh AOS animations & recalculate Lenis scroll dimensions
                if (typeof AOS !== 'undefined') {
                    AOS.refresh();
                }
                if (typeof lenis !== 'undefined' && lenis) {
                    lenis.resize();
                }
            });
        });

        // Interactive AI Core Terminal Logic
        const terminalInput = document.getElementById('terminal-input');
        const terminalHistory = document.getElementById('terminal-history');
        const terminalBody = document.getElementById('terminal-body');

        if (terminalInput) {
            terminalInput.addEventListener('keydown', function (e) {
                if (e.key === 'Enter') {
                    const command = terminalInput.value.trim();
                    if (command) {
                        handleTerminalCommand(command);
                    }
                    terminalInput.value = '';
                }
            });

            // Focus terminal input when clicking inside the terminal body
            terminalBody.addEventListener('click', function () {
                terminalInput.focus();
            });
        }

        function handleTerminalCommand(cmd) {
            // Append input command line to history
            const inputLine = document.createElement('div');
            inputLine.className = 'terminal-input-line';
            inputLine.innerHTML = `<span class="terminal-prompt">bilal@ai-core:<span class="terminal-prompt-path">~</span>$</span><span style="color:#ffffff;">${cmd}</span>`;
            terminalHistory.appendChild(inputLine);

            const output = document.createElement('div');
            output.className = 'terminal-output';

            const cleanCmd = cmd.toLowerCase().trim();

            if (cleanCmd === 'help') {
                output.innerHTML = `Available commands:<br>
  <span style="color:#7ee787;">bio</span>       - Display a summary of my background and goals.<br>
  <span style="color:#7ee787;">skills</span>    - Show main technology stacks and skills.<br>
  <span style="color:#7ee787;">projects</span>  - List primary featured AI and ML systems.<br>
  <span style="color:#7ee787;">contact</span>   - Get direct contact links.<br>
  <span style="color:#7ee787;">clear</span>     - Clear the terminal console output.<br>
  <span style="color:#ff5f56; font-weight:bold;">sudo hire</span> - Direct fast-track hiring privilege!`;
            } else if (cleanCmd === 'bio') {
                output.innerHTML = `<span style="color:#ffad57;">[Profile - Muhammad Bilal Ashiq]</span><br>
An AI/ML researcher and Software Engineer. Deeply committed to designing high-impact predictive classifiers, deep learning architectures, and scalable full-stack applications.
- Currently: Pursuing BSCS at FAST-NUCES (GPA: 3.91 in BSIT path).
- Active Role: CTO & Supervisor at Entracloud.
- Mission: Bridge advanced deep neural architectures with user-centric software.`;
            } else if (cleanCmd === 'skills') {
                output.innerHTML = `<span style="color:#58a6ff;">[Core Technology Proficiencies]</span><br>
Python / PyTorch / TensorFlow ─── [██████████] 95%<br>
Artificial Intelligence / NLP ──── [█████████░] 90%<br>
Software Dev (Java/C++/C#) ───── [██████████] 95%<br>
Database (Oracle/MySQL) ──────── [█████████░] 90%<br>
Spring Boot / FastAPI / Next.js ─ [████████░░] 80%`;
            } else if (cleanCmd === 'projects') {
                output.innerHTML = `<span style="color:#7ee787;">[Featured Core Engineering Systems]</span><br>
1. <span style="font-weight:600;color:#ffffff;">NeuroHire</span> - AI-powered hiring & eye-detection monitoring system.<br>
2. <span style="font-weight:600;color:#ffffff;">Mashoor Fabrics</span> - Paid WooCommerce eCommerce solution.<br>
3. <span style="font-weight:600;color:#ffffff;">Urdu Chatbot</span> - Transformer-based RTL chatbot on HF Spaces.<br>
4. <span style="font-weight:600;color:#ffffff;">RAG Diagnostics</span> - Clinical reasoning engine trained on MIMIC-IV datasets.<br>
5. <span style="font-weight:600;color:#ffffff;">NeuroSecure</span> - Award-winning deep security system.`;
            } else if (cleanCmd === 'contact') {
                output.innerHTML = `<span style="color:#f2cd60;">[Connect with Bilal]</span><br>
- Email: <a href="mailto:methebilalashiq@gmail.com" style="color:#58a6ff;text-decoration:underline;">methebilalashiq@gmail.com</a><br>
- Phone: +92 308 8660209<br>
- LinkedIn: <a href="https://www.linkedin.com/in/bilal-ashiq/" target="_blank" style="color:#58a6ff;text-decoration:underline;">linkedin.com/in/bilal-ashiq</a><br>
- GitHub: <a href="https://github.com/thecallmeBilalAshiq" target="_blank" style="color:#58a6ff;text-decoration:underline;">github.com/thecallmeBilalAshiq</a>`;
            } else if (cleanCmd === 'clear') {
                terminalHistory.innerHTML = '';
                return;
            } else if (cleanCmd === 'sudo hire') {
                output.innerHTML = `<span style="color:#7ee787; font-weight:bold;">[PRIVILEGE ELEVATION GRANTED]</span><br>
<span style="color:#ff5f56; font-weight:bold; animation: pulse-glow 1s infinite;">INITIATING CAREER MATCH SEQUENCES...</span><br>
Access code: <span style="color:#ffffff; font-weight:bold;">BILAL_HIRE_2026</span> verified.<br>
Redirecting to direct contact form to initiate hiring! Get ready...`;
                setTimeout(() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                        if (typeof lenis !== 'undefined' && lenis) {
                            lenis.scrollTo(contactSection, { offset: -80, duration: 1.2 });
                        } else {
                            window.scrollTo({
                                top: contactSection.offsetTop - 80,
                                behavior: 'smooth'
                            });
                        }
                    }
                    // Focus name input in form
                    const nameInput = document.querySelector('#contact-form input[type="text"]');
                    if (nameInput) nameInput.focus();
                }, 2000);
            } else {
                output.innerHTML = `command not found: <span style="color:#ff5f56;">${cmd}</span>. Type 'help' for valid options.`;
            }

            terminalHistory.appendChild(output);

            // Auto-scroll to bottom of terminal
            terminalBody.scrollTop = terminalBody.scrollHeight;
        }
