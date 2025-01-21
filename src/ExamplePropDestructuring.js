// function Tweet(props) {
// return (
//   <h2>{props.name}</h2>
// )

function Tweet({ name, message, likes }) {
  return (
    <div
      style={{
        border: '2px solid',
        margin: '8px',
        padding: '12px',
      }}
    >
      <h2>{name}</h2>
      <div>Message: {message}</div>
      <h3>Likes: {likes}</h3>
    </div>
  );
}

export default function ExamplePropDestructuring() {
  return (
    <div>
      <Tweet name="Karl" message="I like React" likes={12} />
      <Tweet name="Victor" message="Please post on Slack" likes={56} />
    </div>
  );
}
