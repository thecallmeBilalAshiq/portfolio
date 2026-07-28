'use client';

import { useState, useRef, useEffect } from 'react';
import { personalInfo } from '@/data/personal';
import { projectsData } from '@/data/projects';
import { experienceData } from '@/data/experience';
import { educationData } from '@/data/education';
import { skillsData } from '@/data/skills';
import { certificatesData } from '@/data/certificates';
import { awardsData } from '@/data/awards';

export default function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Hello there! 👋 I am Bilal's dedicated AI assistant. Ask me anything about Bilal's certifications, education, experience, or high-impact projects like NeuroHire!"
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = (textToSend) => {
    const query = (textToSend || inputVal).trim();
    if (!query) return;

    setMessages((prev) => [...prev, { sender: 'user', text: query }]);
    setInputVal('');
    setIsTyping(true);

    setTimeout(() => {
      const botReply = generateNLPResponse(query);
      setMessages((prev) => [...prev, { sender: 'bot', text: botReply }]);
      setIsTyping(false);
    }, 500);
  };

  const generateNLPResponse = (query) => {
    const lower = query.toLowerCase().trim();

    if (/^(hi|hello|hey|greetings|who are you|intro|about)/i.test(lower)) {
      return `Hello! 👋 I am **${personalInfo.name}**. I am an AI Engineer & Software Developer from **${personalInfo.location}**. I specialize in **Artificial Intelligence, Machine Learning, Full-Stack Development (Next.js, React, Supabase)**, and **Backend Engineering (Spring Boot, Java, PostgreSQL)**. Feel free to ask about my projects, skills, education, or contact details!`;
    }

    if (lower.includes('freelance') || lower.includes('client')) {
      const freelance = projectsData.filter((p) => p.categories.includes('freelance'));
      let resp = `I have engineered several high-impact **Freelance & Client Projects**:\n\n`;
      freelance.forEach((p, i) => {
        resp += `${i + 1}. **${p.title}**\n   - ${p.description}\n   - **Stack:** ${p.tags.join(', ')}\n\n`;
      });
      return resp.trim();
    }

    if (lower.includes('contact') || lower.includes('email') || lower.includes('phone') || lower.includes('reach') || lower.includes('hire') || lower.includes('linkedin') || lower.includes('github')) {
      return `You can reach me directly via:\n- 📧 **Email:** [${personalInfo.email}](mailto:${personalInfo.email})\n- 📞 **Phone:** [${personalInfo.phone}](tel:${personalInfo.phone})\n- 📍 **Location:** ${personalInfo.location}\n\nI am actively open for full-time roles, AI/software engineering positions, and freelance software projects!`;
    }

    if (lower.includes('neurohire')) {
      const nh = projectsData.find((p) => p.id === 'neurohire');
      if (nh) {
        return `**${nh.title}**:\n${nh.description}\n\n**Technologies:** ${nh.tags.join(', ')}`;
      }
    }

    if (lower.includes('skill') || lower.includes('stack') || lower.includes('technology') || lower.includes('languages')) {
      return `My core technical stack includes:\n\n- **AI & Machine Learning:** Python, PyTorch, Transformers, NLP, RAG, OpenCV, YOLO.\n- **Full-Stack & Web:** Next.js, React, JavaScript, HTML5, CSS3.\n- **Backend & Databases:** Spring Boot, Java, FastAPI, PostgreSQL, Supabase, MongoDB.\n- **Tools:** Docker, Linux, Git/GitHub, Figma.`;
    }

    if (lower.includes('education') || lower.includes('degree') || lower.includes('fast') || lower.includes('university')) {
      return `Regarding my education:\n\n- **BSCS** (Bachelor of Science in Computer Science) at **FAST NUCES** (2022-2026).\n- **BSIT** at **Quaid-i-Azam University** (GPA: 3.91).\n- **FSc Pre-Engineering** (90% marks) & **Matriculation** (96.6% marks).`;
    }

    if (lower.includes('experience') || lower.includes('work') || lower.includes('job') || lower.includes('colabs') || lower.includes('entracloud')) {
      let resp = `Here is a summary of my professional experience:\n\n`;
      experienceData.forEach((exp) => {
        resp += `- **${exp.position}** at **${exp.company}** (${exp.date})\n`;
      });
      return resp;
    }

    if (lower.includes('award') || lower.includes('certificate') || lower.includes('icpc') || lower.includes('winner')) {
      return `My top achievements and certifications:\n\n- 🥇 **1st Position** - FAST-NUCES Idea Competition (NeuroSecure System)\n- 🎗️ **Round II Qualifier** - ICPC 2026\n- 🎗️ **3rd Position** - Vine-a-thon (Google Developer Competition)\n- 📜 **Verified Freelancer** (PSEB)\n- 📜 **Git & GitHub** (Google / Coursera)\n- 📜 **AWS Machine Learning Foundations**`;
    }

    return `I couldn't find that specific detail in Bilal's portfolio. Feel free to ask me about my **skills**, **projects** (like NeuroHire, Comfort Studio UK, or Career ProServe), **education** at FAST-NUCES, **work experience**, or **contact information**!`;
  };

  const renderMarkdown = (text) => {
    if (!text) return '';
    let html = text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" style="color:var(--primary);text-decoration:underline;">$1</a>');
    html = html.replace(/\n/g, '<br>');
    return html;
  };

  return (
    <>
      {/* Chat Tooltip Popup */}
      {showTooltip && !isOpen && (
        <div
          className="chat-tooltip-popup active"
          id="chat-tooltip-popup"
          onClick={() => {
            setShowTooltip(false);
            setIsOpen(true);
          }}
        >
          <span className="chat-tooltip-avatar">
            <i className="fas fa-robot"></i>
          </span>
          <span>Ask me anything!</span>
          <div className="chat-tooltip-arrow"></div>
        </div>
      )}

      {/* Floating Chatbot Widget Button */}
      <button
        className="chat-widget-btn"
        id="chat-widget-btn"
        aria-label="Open Chat Assistant"
        onClick={() => {
          setIsOpen(!isOpen);
          setShowTooltip(false);
        }}
      >
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-comment-dots'}`}></i>
      </button>

      {/* Floating Chatbot Container */}
      <div className={`chat-widget-container ${isOpen ? 'active' : ''}`} id="chat-widget-container">
        <div className="chat-widget-header">
          <div className="chat-header-info">
            <div className="chat-header-avatar">
              <img src={personalInfo.avatarUrl} alt="Bilal Assistant" />
            </div>
            <div className="chat-header-title">
              <h4>Bilal's AI Agent</h4>
              <div className="chat-header-status">
                <span className="chat-header-status-dot"></span>
                <span>Online & Ready</span>
              </div>
            </div>
          </div>
          <button
            className="chat-widget-close"
            id="chat-widget-close"
            aria-label="Close Chat"
            onClick={() => setIsOpen(false)}
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="chat-widget-messages" id="chat-widget-messages" ref={messagesEndRef}>
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`chat-msg ${msg.sender}`}
              dangerouslySetInnerHTML={{ __html: renderMarkdown(msg.text) }}
            ></div>
          ))}
          {isTyping && (
            <div className="chat-msg bot typing-indicator-container">
              <div className="typing-indicator">
                <span className="typing-dot"></span>
                <span className="typing-dot"></span>
                <span className="typing-dot"></span>
              </div>
            </div>
          )}
        </div>

        <div className="chat-widget-chips">
          <span className="chat-chip" onClick={() => handleSend('Tell me about NeuroHire')}>
            NeuroHire Info
          </span>
          <span className="chat-chip" onClick={() => handleSend("What are Bilal's core skills?")}>
            Core Skills
          </span>
          <span className="chat-chip" onClick={() => handleSend('How do I contact Bilal?')}>
            Contact Info
          </span>
        </div>

        <div className="chat-widget-input-area">
          <input
            type="text"
            className="chat-widget-input"
            id="chat-widget-input"
            placeholder="Ask anything..."
            autoComplete="off"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSend();
            }}
          />
          <button
            className="chat-widget-send"
            id="chat-widget-send"
            aria-label="Send Message"
            onClick={() => handleSend()}
          >
            <i className="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </>
  );
}
