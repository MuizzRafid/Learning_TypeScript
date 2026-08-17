import "./App.css";
import { UserCard } from "./components/01_RequiredOptionalProps";
import { GreetA, GreetB } from "./components/02_DefaultProps";

function App() {
  return (
    <>
      <UserCard id={"1"} name="july" subtitle=" Nested P" />
      <GreetA name="simba" />
      <GreetB name={"january"} shout={true} />
    </>
  );
}

export default App;
