import React, { useState } from 'react';

export default function UppercaseConverter() {
  const [text, setText] = useState('');
  return (
    <div className="task">
      <h2>Task 3: Uppercase Converter</h2>
      <input type="text" placeholder="Type..." onChange={e => setText(e.target.value.toUpperCase())} />
      <p className="result">Uppercase: {text}</p>
    </div>
  );
}
