import React, { useState } from 'react';

export default function LiveGreeting() {
  const [name, setName] = useState('');
  return (
    <div className="task">
      <h2>Task 4: Live Greeting</h2>
      <input type="text" placeholder="Your name..." onChange={e => setName(e.target.value)} />
      <p className="result">Hello, {name}!</p>
    </div>
  );
}
