//uderstand what is "type parameter" <T>
//how typescript infers <T> from you arguments automatically

// generic is a function where the types are blanks that i have to fill that later

//<T> is a placeholder
//ts will try to understand what T is

function id<T>(x: T): T {
  return x;
}

//infers T
// id(5)-> T is a number
//id('string')-> T is string
//id<number>(5)

const xyzz = id(5);
console.log(xyzz + 1, id("Muizz"), id(["Rafid"]));

function firstGen<T>(arr: T[]): T | undefined {
  return arr[0];
}

console.log(firstGen([1, 2, 3, 4]));

//without generics -> (x: unknown)=>unknown
//losing specificty
//with generics (x:T)=>T //keep the exact type
function wrap<T>(value: T): { value: T } {
  return { value };
}
function july(x: unknown): unknown {
  return x;
}

const wrapV = wrap("string");
//    **Looks like this
//function wrap<string>(value: string): {
// value: string;
//}

const julyV = july("string");
//      *** Looks like this
//function july(x: unknown): unknown

//             difference between unknown vs generics

//unknown doesn't remember that i pass string so i couldn't use toUpperCase or any other
//for generics: "Give me something. I'll remember its exact type and give you that same type back."
//for unknown:"Give me something. I don't know what it is, and I'll give you back something whose type I don't know."
//Generics are mainly useful when you want to establish a relationship between types.
//unknown is useful when you genuinely don't know what you're receiving.for example:
//function processData(data: unknown) {
//if (typeof data === "string") {
// console.log(data.toUpperCase());
//}

//if (typeof data === "number") {
// console.log(data.toFixed(2));
// }
//}

//                ** Any vs Unknown

//any: "I don't know what this is, and I don't care. Let me do anything."
//unknown: "I don't know what this is, so you must check it."
