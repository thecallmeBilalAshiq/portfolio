'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useTerminal } from '@/hooks/useTerminal';
import { ChevronRight } from 'lucide-react';

export default function Terminal() {
  const { history, currentDirectory, executeCommand } = useTerminal();
  const [input, setInput] = useState('');
  const [booting, setBooting] = useState(true);
  const [bootLines, setBootLines] = useState([]);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  const BOOT_SEQUENCE = [
    'Initializing kernel...',
    'Loading virtual file system...',
    'Mounting ~...',
    'Starting interactive shell...',
    'Welcome to Muhammad Bilal Ashiq\'s Portfolio Shell v1.0.0',
    'Type "help" for a list of available commands.'
  ];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < BOOT_SEQUENCE.length) {
        setBootLines((prev) => [...prev, BOOT_SEQUENCE[index]]);
        index++;
      } else {
        clearInterval(interval);
        setTimeout(() => setBooting(false), 500);
      }
    }, 150);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history, bootLines]);

  // Focus input anywhere clicked on terminal
  const handleTerminalClick = () => {
    if (inputRef.current && !booting) {
      inputRef.current.focus();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      executeCommand(input);
      setInput('');
    }
  };

  const Prompt = ({ dir }) => (
    <div className="flex items-center text-sm mb-1 mt-2">
      <span className="text-prompt-green font-bold">[bilal@portfolio]</span>
      <ChevronRight className="w-4 h-4 mx-1 text-gray-500" />
      <span className="text-prompt-blue font-bold">[{dir}]</span>
      <ChevronRight className="w-4 h-4 mx-1 text-gray-500" />
    </div>
  );

  return (
    <div
      className="min-h-screen bg-background p-4 md:p-8 font-mono text-gray-200 cursor-text flex flex-col"
      onClick={handleTerminalClick}
    >
      <div className="flex-grow max-w-4xl mx-auto w-full">
        {/* Boot Sequence */}
        {bootLines.map((line, idx) => (
          <div key={idx} className="text-gray-400 mb-1">{line}</div>
        ))}

        {!booting && (
          <>
            {/* History */}
            {history.map((entry, idx) => (
              <div key={idx} className="mb-4">
                <Prompt dir={entry.dir} />
                <div className="mb-1">{entry.cmd}</div>
                {entry.output && <div className="ml-2">{entry.output}</div>}
              </div>
            ))}

            {/* Current Input */}
            <div>
              <Prompt dir={currentDirectory} />
              <div className="flex items-center">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="bg-transparent border-none outline-none flex-grow text-gray-200 caret-transparent"
                  autoFocus
                  spellCheck="false"
                  autoComplete="off"
                />
                {/* Simulated Blinking Cursor */}
                <span
                  className="w-2.5 h-5 bg-gray-300 ml-1 inline-block animate-pulse"
                  style={{ animationDuration: '1s' }}
                ></span>
              </div>
            </div>
          </>
        )}
        <div ref={bottomRef} />
      </div>
    </div>
  );
}
