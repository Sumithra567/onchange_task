import React, { useState } from 'react';

export default function WordCounter() {
  const [sentence, setSentence] = useState('');
  const count = sentence.trim() === '' ? 0 : sentence.trim().split(/\s+/).length;
  return (
    <div className="task">
      <h2>Task 5: Word Counter</h2>
      <textarea placeholder="Type sentence..." onChange={e => setSentence(e.target.value)} />
      <p className="result">Words: {count}</p>
    </div>
  );
}
