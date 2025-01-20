// 1. create a state variable
// 2. display the current state
// 3. connect the onChange event to update the state

import { useState } from 'react';

export default function ExampleStateEmail() {
  // 1. create a state variable
  const [email, setEmail] = useState('');

  return (
    <div>
      {/* 2. display the current state */}
      <h2>{email}</h2>
      {/* 3. connect the onChange event to update the state */}
      <input
        value={email}
        onChange={(event) => setEmail(event.currentTarget.value)}
      />
    </div>
  );
}
