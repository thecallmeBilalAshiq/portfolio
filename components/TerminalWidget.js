'use client';

import { useState, useRef, useEffect } from 'react';

export default function TerminalWidget() {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([]);
  const terminalBodyRef = useRef(null);
  const inputRef = useRef(null);

  const handleCommand = (cmd) => {
    const cleanCmd = cmd.toLowerCase().trim();

    let outputContent = null;

    if (cleanCmd === 'help') {
      outputContent = (
        <div>
          Available commands:<br />
          <span style={{ color: '#7ee787' }}>bio</span> - Display a summary of my background and goals.<br />
          <span style={{ color: '#7ee787' }}>skills</span> - Show main technology stacks and skills.<br />
          <span style={{ color: '#7ee787' }}>projects</span> - List primary featured AI and ML systems.<br />
          <span style={{ color: '#7ee787' }}>contact</span> - Get direct contact links.<br />
          <span style={{ color: '#7ee787' }}>clear</span> - Clear the terminal console output.<br />
          <span style={{ color: '#ff5f56', fontWeight: 'bold' }}>sudo hire</span> - Direct fast-track hiring privilege!
        </div>
      );
    } else if (cleanCmd === 'bio') {
      outputContent = (
        <div>
          <span style={{ color: '#ffad57' }}>[Profile - Muhammad Bilal Ashiq]</span><br />
          An AI/ML researcher and Software Engineer. Deeply committed to designing high-impact predictive classifiers, deep learning architectures, and scalable full-stack applications.<br />
          - Currently: Pursuing BSCS at FAST-NUCES (GPA: 3.91 in BSIT path).<br />
          - Active Role: Leader & Supervisor at Entracloud.<br />
          - Mission: Bridge advanced deep neural architectures with user-centric software.
        </div>
      );
    } else if (cleanCmd === 'skills') {
      outputContent = (
        <div>
          <span style={{ color: '#58a6ff' }}>[Core Technology Proficiencies]</span><br />
          Python / PyTorch / TensorFlow ─── [██████████] 95%<br />
          Artificial Intelligence / NLP ──── [█████████░] 90%<br />
          Software Dev (Java/C++/C#) ───── [██████████] 95%<br />
          Database (Oracle/MySQL) ──────── [█████████░] 90%<br />
          Spring Boot / FastAPI / Next.js ─ [████████░░] 80%
        </div>
      );
    } else if (cleanCmd === 'projects') {
      outputContent = (
        <div>
          <span style={{ color: '#7ee787' }}>[Featured Core Engineering Systems]</span><br />
          1. <span style={{ fontWeight: 600, color: '#ffffff' }}>NeuroHire</span> - AI-powered hiring & eye-detection monitoring system.<br />
          2. <span style={{ fontWeight: 600, color: '#ffffff' }}>Mashoor Fabrics</span> - Paid WooCommerce eCommerce solution.<br />
          3. <span style={{ fontWeight: 600, color: '#ffffff' }}>Urdu Chatbot</span> - Transformer-based RTL chatbot on HF Spaces.<br />
          4. <span style={{ fontWeight: 600, color: '#ffffff' }}>RAG Diagnostics</span> - Clinical reasoning engine trained on MIMIC-IV datasets.<br />
          5. <span style={{ fontWeight: 600, color: '#ffffff' }}>NeuroSecure</span> - Award-winning deep security system.
        </div>
      );
    } else if (cleanCmd === 'contact') {
      outputContent = (
        <div>
          <span style={{ color: '#f2cd60' }}>[Connect with Bilal]</span><br />
          - Email: <a href="mailto:methebilalashiq@gmail.com" style={{ color: '#58a6ff', textDecoration: 'underline' }}>methebilalashiq@gmail.com</a><br />
          - Phone: +92 308 8660209<br />
          - LinkedIn: <a href="https://www.linkedin.com/in/bilal-ashiq/" target="_blank" rel="noreferrer" style={{ color: '#58a6ff', textDecoration: 'underline' }}>linkedin.com/in/bilal-ashiq</a><br />
          - GitHub: <a href="https://github.com/thecallmeBilalAshiq" target="_blank" rel="noreferrer" style={{ color: '#58a6ff', textDecoration: 'underline' }}>github.com/thecallmeBilalAshiq</a>
        </div>
      );
    } else if (cleanCmd === 'clear') {
      setHistory([]);
      return;
    } else if (cleanCmd === 'sudo hire') {
      outputContent = (
        <div>
          <span style={{ color: '#7ee787', fontWeight: 'bold' }}>[PRIVILEGE ELEVATION GRANTED]</span><br />
          <span style={{ color: '#ff5f56', fontWeight: 'bold' }}>INITIATING CAREER MATCH SEQUENCES...</span><br />
          Access code: <span style={{ color: '#ffffff', fontWeight: 'bold' }}>BILAL_HIRE_2026</span> verified.<br />
          Redirecting to direct contact form to initiate hiring! Get ready...
        </div>
      );
      setTimeout(() => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 1500);
    } else {
      outputContent = (
        <div>
          command not found: <span style={{ color: '#ff5f56' }}>{cmd}</span>. Type 'help' for valid options.
        </div>
      );
    }

    setHistory((prev) => [...prev, { command: cmd, output: outputContent }]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (inputVal.trim()) {
        handleCommand(inputVal.trim());
      }
      setInputVal('');
    }
  };

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <div className="terminal-widget">
      <div className="terminal-header">
        <div className="terminal-buttons">
          <span className="terminal-btn close"></span>
          <span className="terminal-btn minimize"></span>
          <span className="terminal-btn maximize"></span>
        </div>
        <div className="terminal-title">bilal_ashiq@ai-core:~</div>
        <div>
          <i className="fas fa-terminal" style={{ fontSize: '0.8rem', color: '#8b949e' }}></i>
        </div>
      </div>
      <div
        className="terminal-body"
        id="terminal-body"
        ref={terminalBodyRef}
        onClick={() => inputRef.current && inputRef.current.focus()}
      >
        <div className="terminal-welcome">
          Welcome to Bilal's AI Core Terminal [Version 2.0.0]<br />
          Type 'help' to see list of active commands or 'sudo hire' for access.
        </div>
        <div id="terminal-history">
          {history.map((item, idx) => (
            <div key={idx}>
              <div className="terminal-input-line">
                <span className="terminal-prompt">
                  bilal@ai-core:<span className="terminal-prompt-path">~</span>$
                </span>
                <span style={{ color: '#ffffff' }}>{item.command}</span>
              </div>
              <div className="terminal-output">{item.output}</div>
            </div>
          ))}
        </div>
        <div className="terminal-input-line">
          <span className="terminal-prompt">
            bilal@ai-core:<span className="terminal-prompt-path">~</span>$
          </span>
          <input
            type="text"
            ref={inputRef}
            className="terminal-input"
            autoComplete="off"
            placeholder="Type help..."
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>
    </div>
  );
}
