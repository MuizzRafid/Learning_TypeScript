const raw = '{"id":1,"name":"july","hour":"important"}';
//creating a string and the content is object.

const risky = JSON.parse(raw) as { idO: number; nameO: string };
// then remove the string fold using parse and also write as helps to assersion

//as performs zero runtime validation. It's purely a compile-time instruction telling the type-checker what to believe
//the actual JavaScript object at runtime is completely unaffected.

//now typescript believes risky has a field called idO and nameO
console.log(risky.nameO);

console.log(JSON.stringify(risky));

type User22 = { id: number; name: string };

function isUser(v: unknown): v is User22 {
  return (
    typeof v === "object" &&
    v !== null &&
    "id" in v &&
    typeof (v as any).id === "number" &&
    "name" in v &&
    typeof (v as any).name === "string"
  );
}

const maybe = JSON.parse(raw) as unknown;
if (isUser(maybe)) {
  console.log(maybe.name);
}

//create small typescript poc project and apply this

//                            **** Why we need assersion

//there are real situations where you genuinely know more than TypeScript can figure out on its own, and assertions exist to bridge that gap.

//Case 1: JSON.parse, API responses, external data — TypeScript can't know the shape and what really get from the
//response

//Case 2: DOM elements — TypeScript is deliberately conservative
//getElementById returns HTMLElement | null — TypeScript has no way to know if that ID exists in the DOM, or which specific kind of element
// it is. If you're confident it exists and is an <input>:

//Case 3: Narrowing a union when you know more than TypeScript can prove
