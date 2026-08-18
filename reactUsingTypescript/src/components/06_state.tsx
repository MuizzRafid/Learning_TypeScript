import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0); //infered as number
  return <div>{count}</div>;
}

//idle,loading , successs, error
type LoadState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: string }
  | { status: "error"; message: string };

function heavyDefault(): number {
  return 100;
}

type User = {
  name: string;
};
export function LoaderDemo() {
  const [state, setState] = useState<LoadState>({ status: "idle" });
  const [n, setN] = useState<number>(() => heavyDefault());

  const [user, setUser] = useState<User | null>(null);

  async function fetchData() {
    setState({ status: "loading" });

    //mock api call
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos/3");

      if (!res.ok) {
        throw new Error(`Request failed: ${res.status}`);
      }

      const json = await res.json();
      setState({ status: "success", data: JSON.stringify(json) });

      //catch
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unknown error";
      setState({ status: "error", message });
    }
  }
  return (
    <div>
      <button onClick={fetchData}>Fetch</button>

      {state.status === "idle" && <p>Click the button to load data.</p>}
      {state.status === "loading" && <p>Loading...</p>}
      {state.status === "success" && <p>Data: {state.data}</p>}
      {state.status === "error" && (
        <p style={{ color: "red" }}>Error: {state.message}</p>
      )}
    </div>
  );
}
