import { useState } from 'react';

export default function ExampleFormsWIthControlledComponents() {
  // 1. create state variable
  const [usernameInput, setUsernameInput] = useState('');
  const [username, setUsername] = useState('');
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setUsername(usernameInput);
      }}
    >
      <label htmlFor="usernameInput">Username: </label>
      <input
        // 2. connect the state with the input field
        value={usernameInput}
        // 3. update the state
        onChange={(event) => setUsernameInput(event.currentTarget.value)}
      />
      {/* 4. show state */}
      <div>Name: {username}</div>
    </form>
  );
}
