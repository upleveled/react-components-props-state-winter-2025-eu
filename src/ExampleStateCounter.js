import { useState } from 'react';

export default function ExampleStateCounter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}
