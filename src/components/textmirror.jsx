import React, { useState } from 'react';

export default function TextMirror() {
  const [text, setText] = useState('');
  return (
    <div className="task">
      <h2>Task 1: Text Mirror</h2>
      <input type="text" placeholder="Type..." onChange={e => setText(e.target.value)} />
      <p className="result">Mirror: {text}</p>
    </div>
  );
}
