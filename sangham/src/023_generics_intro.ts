//uderstand what is "type parameter" <T>
//how typescript infers <T> from you arguments automatically

// generic is a function where the types are blanks that i have to fill later

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
