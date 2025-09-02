import React, { useState } from 'react';

export default function CharCounter() {
  const [text, setText] = useState('');
  return (
    <div className="task">
      <h2>Task 2: Character Counter</h2>
      <textarea placeholder="Type..." onChange={e => setText(e.target.value)} />
      <p className="result">Characters: {text.length}</p>
    </div>
  );
}
