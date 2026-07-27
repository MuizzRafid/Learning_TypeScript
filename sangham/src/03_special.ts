let title: string = "intro";
//i will get error because this is strictNullChecks
//if i make strict: false from tsconfig file then i will works

//title=undefined

//by doing union i can do this
let subtitle: string | undefined = undefined;

//void : function doesn't return a useful value
function log(msg: string): void {
  console.log(msg);
}

//it will never retrun so i give never as fuction type
function fail(msg: string): never {
  throw new Error(msg);
}

//DO NOT USE ANY-> try to ignore

const valueAny: any = JSON.parse('{"x":1}');

valueAny.notThere.toFixed(2); //this will run at compile time but explode at run time
//cause notThere doesn't exist in the object
