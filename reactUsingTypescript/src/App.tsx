import "./App.css";
import { UserCard } from "./components/01_RequiredOptionalProps";
import { GreetA, GreetB } from "./components/02_DefaultProps";
import {
  Panel,
  RequiredChildrenPanel,
} from "./components/03_ChildrenReactNode";
import { Badge } from "./components/04_AsConstVariables";
import { Button } from "./components/05_ComponentProps";
import { Counter, LoaderDemo } from "./components/06_state";

function App() {
  return (
    <>
      {/* <UserCard id={"1"} name="july" subtitle=" Nested P" />
      <GreetA name="simba" />
      <GreetB name={"january"} shout={true} /> */}
      <Panel
        title="Panel"
        children={
          <ul>
            <li>One</li>
          </ul>
        }
      ></Panel>
      <RequiredChildrenPanel
        title="hello"
        // children={<p>children</p>}
      >
        Some Content Here
      </RequiredChildrenPanel>

      <Badge label="Initial" variant="secondary"></Badge>

      <Button variant="primary" onClick={() => alert("clicked")}>
        Text
      </Button>

      <Counter></Counter>
      <LoaderDemo></LoaderDemo>
    </>
  );
}

export default App;
