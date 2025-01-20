import './App.css';
import ExampleComponents from './ExampleComponents';
import ExampleProps from './ExampleProps';
import ExampleStateCounter from './ExampleStateCounter';
import ExampleStateEmail from './ExampleStateEmail';

export default function App() {
  return (
    <div className="App">
      <h1>Example: Import and Export Components</h1>
      <ExampleComponents />
      <h1>Example: Props</h1>
      <ExampleProps
        name="Karl"
        age={35}
        address={{ street: 'abc street', zipCode: 1234 }}
      />
      <ExampleProps
        name="Antje"
        age={40}
        address={{ street: 'bcd way', zipCode: 4321 }}
      />
      <h1>Example: State Counter</h1>
      <ExampleStateCounter />
      <h1>Example: State Email</h1>
      <ExampleStateEmail />
    </div>
  );
}
