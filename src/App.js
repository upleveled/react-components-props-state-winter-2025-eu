import ExampleClassToFunction from './ExampleClassToFunction';
import ExampleClassToFunctionClass from './ExampleClassToFunction';
import ExampleComponents from './ExampleComponents';
import ExampleConditionalRendering from './ExampleConditionalRendering';
import ExampleFormsWIthControlledComponents from './ExampleFormsWIthControlledComponents';
import ExampleLiftingStateUp from './ExampleLiftingStateUp';
import ExampleMappingOverArrays from './ExampleMappingOverArrays';
import ExamplePropDestructuring from './ExamplePropDestructuring';
import ExampleProps from './ExampleProps';
import ExampleStateCounter from './ExampleStateCounter';
import ExampleStateEmail from './ExampleStateEmail';
import ExampleStateNotSynchronous from './ExampleStateNotSynchronous';
import ExampleStylingOptions from './ExampleStylingOptions';

export default function App() {
  return (
    <div>
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
      <h1>Example: Mapping Over Arrays</h1>
      <ExampleMappingOverArrays />
      <h1>Example: Conditional Rendering</h1>
      <ExampleConditionalRendering />
      <h1>Example: Prop Destructuring</h1>
      <ExamplePropDestructuring />
      <h1>Example: State Is Not Synchronous</h1>
      <ExampleStateNotSynchronous />
      <h1>Example: Forms With Controlled Components</h1>
      <ExampleFormsWIthControlledComponents />
      <h1>Example: Lifting State Up</h1>
      <ExampleLiftingStateUp />
      <h1>Example: Styling Options</h1>
      <ExampleStylingOptions />
      <h1>Example: Class to Function</h1>
      <ExampleClassToFunctionClass
        user={{
          details: 'details',
          name: 'Lukas',
          imageAlt: 'this is an image',
          image:
            'https://api.memegen.link/images/buzz/memes/memes_everywhere.png?width=400',
        }}
      />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
