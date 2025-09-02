import React from 'react';
import TextMirror from './components/textmirror';
import CharCounter from './components/charcount';
import UppercaseConverter from './components/upperconverter';
import LiveGreeting from './components/livegreeting';
import WordCounter from './components/wordcounter';
import PasswordStrengthSimple from './components/passwordStrength';
import './style.css';

export default function App() {
  return (
    <div className="container">
      <div className="task-list">
        <TextMirror />
        <CharCounter />
        <UppercaseConverter />
        <LiveGreeting />
        <WordCounter />
        <PasswordStrengthSimple />
      </div>
    </div>
  );
}


