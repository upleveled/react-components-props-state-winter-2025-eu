import { useState } from 'react';

function Lightbulb(props) {
  return <div>Lightbulb is {props.isOn ? '🌞 ON' : '🌑 OFF'}</div>;
}

function Switch(props) {
  return <button onClick={() => props.setIsOn(!props.isOn)}>toggle</button>;
}

export default function ExampleLiftingStateUp() {
  // 1.create useState in parent component
  const [isOn, setIsOn] = useState(true);
  return (
    <div>
      {/* 2. useState as props to children */}
      <Lightbulb isOn={isOn} />
      <Switch isOn={isOn} setIsOn={setIsOn} />
    </div>
  );
}
