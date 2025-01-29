import { useMachine } from '@xstate/react';
import { useReducer, useState } from 'react';
import { createMachine } from 'xstate';

const initialLightbulbState = { status: 'on' };

function lightbulbReducer(lightbulb, action) {
  switch (action.type) {
    case 'turnOn': {
      if (lightbulb.status !== 'broken') {
        return { status: 'on' };
      }
      return lightbulb;
    }
    case 'turnOff': {
      if (lightbulb.status !== 'broken') {
        return { status: 'off' };
      }
      return lightbulb;
    }
    case 'break': {
      return { status: 'broken' };
    }
    default:
      throw new Error('unknown action');
  }
}

function StateManagementUseReducer() {
  const [lightbulb, dispatchLightbulb] = useReducer(
    lightbulbReducer,
    initialLightbulbState,
  );
  return (
    <div>
      <h2>State Management with useReducer</h2>
      <div>Lightbulb: {lightbulb.status}</div>
      <button onClick={() => dispatchLightbulb({ type: 'turnOn' })}>On</button>
      <button onClick={() => dispatchLightbulb({ type: 'turnOff' })}>
        Off
      </button>
      <button onClick={() => dispatchLightbulb({ type: 'break' })}>
        Break
      </button>
    </div>
  );
}

const lightbulbMachine = createMachine({
  id: 'lightbulb',
  initial: 'lightbulbOn',
  states: {
    lightbulbOn: {
      on: {
        TURN_OFF: 'lightbulbOff',
        BREAK: 'lightbulbBroken',
      },
    },
    lightbulbOff: {
      on: {
        TURN_ON: 'lightbulbOn',
        BREAK: 'lightbulbBroken',
      },
    },
    lightbulbBroken: {
      on: {
        // No transition when its broken
      },
    },
  },
});

function StateManagementUseXState() {
  const [lightbulb, send] = useMachine(lightbulbMachine);
  return (
    <div>
      <h2>State Management with X State</h2>
      <div>Lightbulb: {lightbulb.value}</div>
      <button onClick={() => send({ type: 'TURN_ON' })}>On</button>
      <button onClick={() => send({ type: 'TURN_OFF' })}>Off</button>
      <button onClick={() => send({ type: 'BREAK' })}>Break</button>
    </div>
  );
}

export default function ExampleStateManagement() {
  const [lightbulb, setLightbulb] = useState({ status: 'on' });
  return (
    <div>
      <h2>State Management with Ternary Operators</h2>
      <div>Lightbulb: {lightbulb.status}</div>
      <div>
        <button
          onClick={() =>
            setLightbulb(
              lightbulb.status !== 'broken'
                ? { status: 'on' }
                : { status: 'broken' },
            )
          }
        >
          On
        </button>
        <button
          onClick={() =>
            setLightbulb(
              lightbulb.status !== 'broken'
                ? { status: 'off' }
                : { status: 'broken' },
            )
          }
        >
          Off
        </button>
        <button onClick={() => setLightbulb({ status: 'broken' })}>
          Break
        </button>
      </div>
      <StateManagementUseReducer />
      <StateManagementUseXState />
    </div>
  );
}
