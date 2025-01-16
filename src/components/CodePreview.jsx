import React from 'react';
import '../css/contact.css';

export default function CodePreview({ formData }) {
  const currentDate = new Date().toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  });

  const formatParagraph = (text, charsPerLine) => {
    if (!text) return [];
    const words = text.split(' ');
    const lines = [];
    let currentLine = '';
    words.forEach(word => {
      if (currentLine.length + word.length + 1 <= charsPerLine) {
        currentLine += (currentLine.length ? ' ' : '') + word;
      } else {
        lines.push(currentLine);
        currentLine = word;
      }
    });
    if (currentLine) {
      lines.push(currentLine);
    }
    return lines;
  };

  const messageLines = formatParagraph(formData?.message || '', 48);

  const generateCodeLines = () => {
    const lines = [
      `const button = document.querySelector("#sendBtn");`,
      ``,
      `const message = {`,
      ` name: "${formData?.name || ''}",`,
      ` email: "${formData?.email || ''}",`,
    ];

    // Handle message property with proper multi-line formatting
    if (messageLines.length > 0) {
      lines.push(` message: "${messageLines[0]}`);
      for (let i = 1; i < messageLines.length; i++) {
        if (i === messageLines.length - 1) {
          lines.push(`${messageLines[i]}",`);
        } else {
          lines.push(`${messageLines[i]}`);
        }
      }
    } else {
      lines.push(` message: "",`);
    }

    lines.push(` date: "${currentDate}"`,
      `}`,
      ``,
      `button.addEventListener('click', () => {`,
      ` form.send(message);`,
      `})`
    );
    return lines;
  };

  const codeLines = generateCodeLines();

  const renderCodePart = (line) => {
    // Special handling for object property lines
    if (line.trim().startsWith('name:') || 
        line.trim().startsWith('email:') || 
        line.trim().startsWith('date:')) {
      const [key, ...valueParts] = line.split(':');
      return (
        <>
          <span className="variable">{key.trim()}</span>
          <span className="punctuation">:</span>
          {' '}
          <span className="string">{valueParts.join(':').trim()}</span>
        </>
      );
    }

    // Special handling for message property and its continuation lines
    if (line.trim().startsWith('message:')) {
      const [key, ...valueParts] = line.split(':');
      return (
        <>
          <span className="variable">{key.trim()}</span>
          <span className="punctuation">:</span>
          {' '}
          <span className="string">{valueParts.join(':').trim()}</span>
        </>
      );
    }

    // Handle message continuation lines
    if (messageLines.some(msgLine => line.trim() === msgLine || 
        line.trim() === `${msgLine}",`)) {
      return <span className="string">{line}</span>;
    }

    // Handle other code parts
    const parts = line.split(' ').filter(Boolean);
    return parts.map((part, index) => {
      let className = '';
      if (part.includes('const')) className = 'keyword';
      else if (part.includes('document') || part.includes('button')) className = 'variable';
      else if (part.includes('querySelector') || part.includes('addEventListener') || part.includes('send')) className = 'function';
      else if (part.startsWith('"') || part.endsWith('"')) className = 'string';
      else if (part.includes('{') || part.includes('}') || part.includes('(') || part.includes(')') || part === '=' || part === ';' || part === ',') className = 'punctuation';
      
      return (
        <React.Fragment key={index}>
          <span className={className}>{part}</span>
          {' '}
        </React.Fragment>
      );
    });
  };

  return (
    <pre className="code-preview">
      <code className="code-container">
        <div className="line-numbers">
          {codeLines.map((_, i) => (
            <div key={i + 1} className="line-number">
              {i + 1}
            </div>
          ))}
        </div>
        <div className="code-content">
          {codeLines.map((line, i) => (
            <div key={i} className="code-line">
              {line ? renderCodePart(line) : '\u00A0'}
            </div>
          ))}
        </div>
      </code>
    </pre>
  );
}