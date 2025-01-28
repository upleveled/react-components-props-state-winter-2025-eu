import { useState } from 'react';

// DONT DO THIS!!!!
function AntiPattern() {
  return (
    <button
      id="my-button"
      onClick={() => {
        document.getElementById('my-button').textContent = 'clicked';
      }}
    >
      Click Me!
    </button>
  );
}

function WithoutAntiPattern() {
  const [toggleText, setToggleText] = useState(false);
  return (
    <button onClick={() => setToggleText(true)}>
      {toggleText ? 'clicked' : 'Click Me!'}
    </button>
  );
}

export default function ExampleReactAntiPattern() {
  return (
    <div>
      <AntiPattern />
      <AntiPattern />
      <hr />
      <WithoutAntiPattern />
      <WithoutAntiPattern />
    </div>
  );
}
