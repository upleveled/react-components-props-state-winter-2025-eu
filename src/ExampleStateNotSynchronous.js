import { useState } from 'react';

export default function ExampleStateNotSynchronous() {
  const [isOn, setIsOn] = useState(true);

  function toggleLight() {
    const newValue = !isOn;
    console.log('before', isOn);
    setIsOn(newValue);
    console.log('after', newValue);
  }

  console.log('outside iof the function', isOn);

  return (
    <div>
      light bulb is {isOn ? 'on 🌝 ' : 'off 🌑 '}
      <button onClick={() => toggleLight()}>toggle</button>
    </div>
  );
}
