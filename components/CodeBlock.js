"use client"
import React, { useState } from 'react';
import styles from '../styles/Components.module.scss'


const CodeBlock = (props) => {
  const [copied, setCopied] = useState(false);
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(props.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
    } catch (err) {
    }
  };

  return (

    <div className='content rich-text-block'>
      <div className={styles.codeBlock}>
        <pre><code>{props.code}</code></pre>
        <div className={styles.topBar}>
          <button onClick={copyToClipboard} className={styles.copyButton} >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15" stroke="currentColor" strokeWidth="2"></path><path d="M9 6C9 4.34315 10.3431 3 12 3V3C13.6569 3 15 4.34315 15 6V6C15 6.55228 14.5523 7 14 7H10C9.44772 7 9 6.55228 9 6V6Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"></path></svg>
            <span>{copied ? 'Copiato!' : 'Copia il prompt'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CodeBlock;
