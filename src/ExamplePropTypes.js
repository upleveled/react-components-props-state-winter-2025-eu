import checkPropTypes from 'prop-types/checkPropTypes';

function User(props) {
  return (
    <div
      style={{
        border: 'solid 2px #ff3367',
        borderRadius: '3px',
        padding: '1em',
        display: 'inline-block',
      }}
    >
      <div>Name: {props.name} </div>
      <div>Age: {props.age} </div>
      <div>
        Games: {props.games[0]} and {props.games[1]}
      </div>
    </div>
  );
}

export default function ExamplePropTypes() {
  return <User name="Lukas" age="string" games={['CS:GO', 'GTA']} />;
}
