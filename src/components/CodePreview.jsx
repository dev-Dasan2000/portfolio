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

  // Format message into multiple lines
  const messageLines = formatParagraph(formData?.message || '', 48);
  
  // Generate code lines with proper message formatting
  const generateCodeLines = () => {
    const lines = [
      `const button = document.querySelector("#sendBtn");`,
      ``,
      `const message = {`,
      `  name: "${formData?.name || ''}", `,
      `  email: "${formData?.email || ''}", `,
    ];

    // Add message lines with proper indentation
    messageLines.forEach((messageLine, index) => {
      if (index === 0) {
        lines.push(`  message: "${messageLine}${messageLines.length > 1 ? '' : '",'}`) ;
      } else if (index === messageLines.length - 1) {
        lines.push(`           "${messageLine}",`);
      } else {
        lines.push(`           "${messageLine}`);
      }
    });

    lines.push(`  date: "${currentDate}"`,
      `}`,
      ``,
      `button.addEventListener('click', () => {`,
      `  form.send(message);`,
      `})`);

    return lines;
  };

  const codeLines = generateCodeLines();

  const renderCodePart = (part) => {
    let className = '';
    if (part.includes('const')) className = 'keyword';
    else if (part.includes('document') || part.includes('button')) className = 'variable';
    else if (part.includes('querySelector') || part.includes('addEventListener') || part.includes('send')) className = 'function';
    else if (part.startsWith('"') || part.endsWith('"')) className = 'string';
    else if (part.includes('{') || part.includes('}') || part.includes('(') || part.includes(')') || part === '=' || part === ';' || part === ',') className = 'punctuation';
    
    return (
      <span className={className}>
        {part}{' '}
      </span>
    );
  };

  return (
    <pre className="code-preview">
      <code className="code-container">
        {/* Line numbers */}
        <div className="line-numbers">
          {codeLines.map((_, i) => (
            <div key={i + 1} className="line-number">
              {i + 1}
            </div>
          ))}
        </div>
        
        {/* Code content */}
        <div className="code-content">
          {codeLines.map((line, i) => (
            <div key={i} className="code-line">
              {line ? (
                line.split(' ').map((part, j) => (
                  <React.Fragment key={j}>
                    {renderCodePart(part)}
                  </React.Fragment>
                ))
              ) : (
                '\u00A0'
              )}
            </div>
          ))}
        </div>
      </code>
    </pre>
  );
}