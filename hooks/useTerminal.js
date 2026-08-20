import { useState, useCallback } from 'react';

const INITIAL_VFS = {
  '~': {
    type: 'dir',
    contents: {
      'about.txt': {
        type: 'file',
        content: `Hi, I'm Muhammad Bilal Ashiq.
I'm an AI Engineer & Software Developer from Lahore, Pakistan.
I specialize in Artificial Intelligence, Machine Learning, Full-Stack Development, and Backend Engineering.
`
      },
      'projects': {
        type: 'dir',
        contents: {
          'neurohire.md': {
            type: 'file',
            content: `# NeuroHire
An AI recruitment ecosystem.
Technologies: Next.js, Python, ML, NLP
`
          },
          'comfort-studio.json': {
            type: 'file',
            content: `{
  "name": "Comfort Studio UK",
  "type": "E-commerce Storefront",
  "stack": ["Next.js", "React", "Tailwind CSS"]
}`
          }
        }
      },
      'research': {
        type: 'dir',
        contents: {
          'gravitational_waves_ligo.py': {
            type: 'file',
            content: `import numpy as np
import pandas as pd

def analyze_waves():
    print("Analyzing LIGO/Virgo data...")
    # Mock ML script
    return True
`
          }
        }
      },
      'skills': {
        type: 'dir',
        contents: {
          'tech_stack.json': {
            type: 'file',
            content: `{
  "ai_ml": ["Python", "PyTorch", "Transformers", "NLP"],
  "frontend": ["Next.js", "React", "Tailwind"],
  "backend": ["Spring Boot", "Java", "PostgreSQL", "Supabase"]
}`
          }
        }
      }
    }
  }
};

export function useTerminal() {
  const [history, setHistory] = useState([]);
  const [currentDirectory, setCurrentDirectory] = useState('~');
  const [vfs] = useState(INITIAL_VFS);

  const resolvePath = (path, currentPath) => {
    if (!path) return currentPath;
    if (path === '~') return '~';
    if (path === '/') return '~';

    let targetParts = [];
    if (path.startsWith('~/') || path === '~') {
       targetParts = path === '~' ? ['~'] : ['~', ...path.substring(2).split('/').filter(Boolean)];
    } else {
       targetParts = [...currentPath.split('/'), ...path.split('/').filter(Boolean)];
    }

    let resolvedParts = [];
    for (const part of targetParts) {
      if (part === '.') continue;
      if (part === '..') {
        if (resolvedParts.length > 1) {
            resolvedParts.pop();
        }
      } else {
        resolvedParts.push(part);
      }
    }
    return resolvedParts.join('/');
  };

  const getNode = (path) => {
    const parts = path.split('/');
    let current = vfs['~'];
    if (parts[0] !== '~') return null;

    for (let i = 1; i < parts.length; i++) {
      if (!current || current.type !== 'dir') return null;
      current = current.contents[parts[i]];
    }
    return current;
  };

  const executeCommand = useCallback((cmdString) => {
    const trimmedCmd = cmdString.trim();
    if (!trimmedCmd) return;

    const [cmd, ...args] = trimmedCmd.split(' ').filter(Boolean);
    let output = null;
    let newDir = currentDirectory;

    switch (cmd) {
      case 'help':
        output = (
          <div className="text-gray-300">
            <p>Available commands:</p>
            <ul className="pl-4 mt-2">
              <li><span className="text-prompt-green font-bold">help</span> - Show this help message</li>
              <li><span className="text-prompt-green font-bold">clear</span> - Clear the terminal screen</li>
              <li><span className="text-prompt-green font-bold">ls</span> / <span className="text-prompt-green font-bold">eza</span> - List directory contents</li>
              <li><span className="text-prompt-green font-bold">cat &lt;file&gt;</span> - Print raw file contents</li>
              <li><span className="text-prompt-green font-bold">bat &lt;file&gt;</span> - Print file contents with syntax highlighting</li>
              <li><span className="text-prompt-green font-bold">cd &lt;dir&gt;</span> - Change directory</li>
            </ul>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        return; // Early return to not add 'clear' to history if we just cleared it

      case 'ls':
      case 'eza': {
        const targetDir = args[0] ? resolvePath(args[0], currentDirectory) : currentDirectory;
        const node = getNode(targetDir);

        if (!node) {
          output = <span className="text-red-400">ls: cannot access '{args[0]}': No such file or directory</span>;
        } else if (node.type !== 'dir') {
          output = <span className="text-gray-300">{args[0]}</span>;
        } else {
          output = (
            <div className="flex flex-wrap gap-4">
              {Object.keys(node.contents).map((name) => {
                const item = node.contents[name];
                let colorClass = 'text-gray-300';
                if (item.type === 'dir') {
                  colorClass = 'text-prompt-blue font-bold'; // Directory
                } else if (name.endsWith('.py') || name.endsWith('.sh')) {
                  colorClass = 'text-prompt-green'; // Executable/Script
                } else if (name.endsWith('.json') || name.endsWith('.md')) {
                  colorClass = 'text-yellow-200';
                }

                return (
                  <span key={name} className={colorClass}>
                    {name}{item.type === 'dir' ? '/' : ''}
                  </span>
                );
              })}
            </div>
          );
        }
        break;
      }

      case 'cat':
      case 'bat': {
        if (!args[0]) {
          output = <span className="text-red-400">{cmd}: missing file operand</span>;
          break;
        }
        const filePath = resolvePath(args[0], currentDirectory);
        const node = getNode(filePath);

        if (!node) {
          output = <span className="text-red-400">{cmd}: {args[0]}: No such file or directory</span>;
        } else if (node.type === 'dir') {
          output = <span className="text-red-400">{cmd}: {args[0]}: Is a directory</span>;
        } else {
          if (cmd === 'cat') {
            output = <pre className="text-gray-300 whitespace-pre-wrap font-mono">{node.content}</pre>;
          } else {
            // Simulated syntax highlighting for bat
            const lines = node.content.split('\n');
            output = (
              <div className="font-mono text-sm">
                {lines.map((line, idx) => (
                  <div key={idx} className="flex">
                    <span className="text-gray-500 w-8 text-right pr-3 border-r border-gray-600 mr-3 select-none">{idx + 1}</span>
                    <span className={`
                      ${args[0].endsWith('.json') ? 'text-blue-300' : ''}
                      ${args[0].endsWith('.md') ? 'text-yellow-200' : ''}
                      ${args[0].endsWith('.py') ? 'text-green-300' : ''}
                      ${!args[0].match(/\.(json|md|py)$/) ? 'text-gray-200' : ''}
                      whitespace-pre-wrap
                    `}>{line}</span>
                  </div>
                ))}
              </div>
            );
          }
        }
        break;
      }

      case 'cd': {
        if (!args[0]) {
           newDir = '~';
           setCurrentDirectory('~');
        } else {
           const targetDir = resolvePath(args[0], currentDirectory);
           const node = getNode(targetDir);
           if (!node) {
              output = <span className="text-red-400">cd: {args[0]}: No such file or directory</span>;
           } else if (node.type !== 'dir') {
              output = <span className="text-red-400">cd: {args[0]}: Not a directory</span>;
           } else {
              newDir = targetDir;
              setCurrentDirectory(targetDir);
           }
        }
        break;
      }

      default:
        output = <span className="text-red-400">command not found: {cmd}</span>;
    }

    setHistory((prev) => [
      ...prev,
      { cmd: cmdString, output, dir: currentDirectory }
    ]);
  }, [currentDirectory, vfs]);

  return {
    history,
    setHistory,
    currentDirectory,
    executeCommand
  };
}
