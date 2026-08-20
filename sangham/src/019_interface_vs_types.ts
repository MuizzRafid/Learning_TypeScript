// interface -> object shapes that you expect to extend
// supports declaration merging (can even patch built-in/global types, e.g. Window)
// types -> more general -> objects, unions, intersections, tuples, functions, mapped/conditional types
// cannot be reopened -> no merging

interface Box1 {
  width: number;
}

// declaration merging: re-declaring the same interface name adds fields.
// types CANNOT do this — a duplicate `type test = {...}` name is a hard error.
interface Box1 {
  height: number;
}

const boxDemo: Box1 = { width: 10, height: 20 };

// interface extends another interface
interface Box2 extends Box1 {
  depth: number;
}

// type achieves the same via intersection (&) instead of extends
type Box1Type = { width: number; height: number };
type Box2Type = Box1Type & { depth: number };

// things ONLY `type` can do — interface has no equivalent:
type Status = "success" | "error" | "loading"; // union
type ID = string | number; // primitive alias
type Point = [x: number, y: number]; // tuple
type Adder = (a: number, b: number) => number; // function type

type test = { value: string };
type test2 = { name: string };

const unionType: test | test2 = { value: "alpha" };

// must narrow before accessing — TS only knows "one of the two", not which
if ("value" in unionType) {
  console.log(unionType.value);
}

//             ***** Where to use  what
//interface

//1.You're describing an object shape that might be extended(lavrador extend dog)
//2.It's a public API surface — component props, class contracts

//type

//1. You need a union (type Status = "idle" | "loading" | "success" | "error";)
//2. You need a tuple (type Point = [x: number, y: number];)
//3. You need a function type (type Adder = (a: number, b: number) => number;)
//4. You need to derive a type from something else — mapped types, typeof, indexed access, conditional types
