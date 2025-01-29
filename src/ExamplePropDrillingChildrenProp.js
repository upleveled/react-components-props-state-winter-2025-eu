function Nav(props) {
  return (
    <>
      {/* display the user.name in the Nav component */}
      <button>Logout</button> {props.user.name}
    </>
  );
}

export function Header(props) {
  return (
    <header>
      Logo Upleveled
      {props.children}
    </header>
  );
}

export default function ExamplePropDrillingChildrenProp() {
  const user = { name: 'Karl', type: 'human' };
  return (
    <div>
      <Header>
        <Nav user={user} />
      </Header>
      <h2>BlogPost</h2>
    </div>
  );
}
