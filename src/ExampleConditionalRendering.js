import { useState } from 'react';

export default function ExampleConditionalRendering() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  return (
    <div>
      {/* Conditional Rendering with Ternary Operator */}
      <div>{isLoggedIn ? <p>Welcome!</p> : <p>Please Log In</p>}</div>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? 'Log out' : 'Log in'}
      </button>
      {/* Conditional Rendering with Boolean Operator */}
      <div>{isButtonVisible && <p>Click Me</p>}</div>
      <button onClick={() => setIsButtonVisible(!isButtonVisible)}>
        Toggle Button
      </button>
    </div>
  );
}
