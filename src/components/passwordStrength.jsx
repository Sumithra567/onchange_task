import React, { useState } from 'react';

export default function PasswordStrengthSimple() {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState('');

  const handleChange = (e) => {
    const pw = e.target.value;
    setPassword(pw);

    if (pw.length >= 8) {
      setStrength('Strong');
    } else if (pw.length >= 4) {
      setStrength('Medium');
    } else if (pw.length > 0) {
      setStrength('Weak');
    } else {
      setStrength('');
    }
  };

  const colorMap = {
    Weak: 'red',
    Medium: 'orange',
    Strong: 'green',
  };

  return (
    <div style={{ maxWidth: '300px' }}>
      <h2>Task 6:Password Strength Checker</h2>
      <input
        type="password"
        placeholder="Type your password..."
        value={password}
        onChange={handleChange}
        
      />
      {strength && (
        <p style={{ color: colorMap[strength], fontWeight: 'bold' }}>
          Strength: {strength}
        </p>
      )}
    </div>
  );
}

