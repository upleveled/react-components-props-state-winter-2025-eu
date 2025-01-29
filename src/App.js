import ExampleArrayOfObjects from './ExampleArrayOfObjects';
import ExampleChildrenProps from './ExampleChildrenProps';
import ExampleClassToFunction from './ExampleClassToFunction';
import ExampleComponents from './ExampleComponents';
import ExampleConditionalRendering from './ExampleConditionalRendering';
import ExampleControlledComponentCheckboxes from './ExampleControlledComponentCheckboxes';
import ExampleDataFetching from './ExampleDataFetching';
import ExampleDerivingState from './ExampleDerivingState';
import ExampleFormsWIthControlledComponents from './ExampleFormsWIthControlledComponents';
import ExampleLiftingStateUp from './ExampleLiftingStateUp';
import ExampleMappingOverArrays from './ExampleMappingOverArrays';
import ExamplePropDestructuring from './ExamplePropDestructuring';
import ExamplePropDrilling from './ExamplePropDrilling';
import ExamplePropDrillingChildrenProp from './ExamplePropDrillingChildrenProp';
import ExampleProps from './ExampleProps';
import ExamplePropTypes from './ExamplePropTypes';
import ExampleReactAntiPattern from './ExampleReactAntiPattern';
import ExampleStateCounter from './ExampleStateCounter';
import ExampleStateEmail from './ExampleStateEmail';
import ExampleStateManagement from './ExampleStateManagement';
import ExampleStateNotSynchronous from './ExampleStateNotSynchronous';
import ExampleStylingOptions from './ExampleStylingOptions';
import ExampleUseEffect from './ExampleUseEffect';

export default function App() {
  return (
    <div>
      <h1>Example: Data Fetching</h1>
      <ExampleDataFetching />
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
      <ExampleClassToFunction
        user={{
          details: 'details',
          name: 'Lukas',
          imageAlt: 'this is an image',
          image:
            'https://api.memegen.link/images/buzz/memes/memes_everywhere.png?width=400',
        }}
      />
      <h1>Example: Children Props</h1>
      <ExampleChildrenProps />
      <h1>Example: Prop Types</h1>
      <ExamplePropTypes />
      <h1>Example: React Anti Pattern</h1>
      <ExampleReactAntiPattern />
      <h1>Example: Controlled Components with Checkboxes</h1>
      <ExampleControlledComponentCheckboxes />
      <h1>Example: Array of Objects</h1>
      <ExampleArrayOfObjects />
      <h1>Example: UseEffect</h1>
      <ExampleUseEffect />
      <h1>Example: Deriving State vs. Extra State Variable</h1>
      <ExampleDerivingState />
      <h1>Example: Prop Drilling</h1>
      <ExamplePropDrilling />
      <h1>Example: Prop Drilling Children Prop</h1>
      <ExamplePropDrillingChildrenProp />
      <h1>Example: State Management</h1>
      <ExampleStateManagement />
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
