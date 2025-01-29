import { useEffect, useState } from 'react';

function calculatePositiveValues(number1, number2) {
  if (number1 > 0 && number2 > 0) {
    return [number1, number2];
  } else if (number1 > 0 && number2 <= 0) {
    return [number1];
  } else if (number1 <= 0 && number2 > 0) {
    return [number2];
  } else {
    return [];
  }
}

export default function ExampleDerivingState() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [positiveValues, setPositiveValues] = useState([]);

  useEffect(() => {
    if (count1 > 0 && count2 > 0) {
      setPositiveValues([count1, count2]);
    } else if (count1 > 0 && count2 <= 0) {
      setPositiveValues([count1]);
    } else if (count1 <= 0 && count2 > 0) {
      setPositiveValues([count2]);
    } else {
      setPositiveValues([]);
    }
  }, [count1, count2]);

  return (
    <>
      <div>
        <div>Count1: {count1}</div>
        <button onClick={() => setCount1(count1 + 1)}>+1</button>
        <button onClick={() => setCount1(count1 - 1)}>-1</button>
      </div>
      <div>
        <div>Count2: {count2}</div>
        <button onClick={() => setCount2(count2 + 1)}>+1</button>
        <button onClick={() => setCount2(count2 - 1)}>-1</button>
      </div>
      <div>
        Positive Values: {calculatePositiveValues(count1, count2).join(', ')}
      </div>
      <div>
        Positive Values with Extra State Variable:
        {positiveValues.join(', ')}
      </div>
    </>
  );
}
