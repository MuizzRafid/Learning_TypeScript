//inference example (return type inference)
//when i hover mouse on the function it shows const doubleFunction: (n: number) => number
//i don't need to give any return type becuase i gave number so surely i will get number
const doubleFunction = (n: number) => n * 2;

//n is typed number (you told it that explicitly)
//n * 2 — the * operator, when applied to two numbers, always produces a number
//So the return type is inferred as number, based on the operation, not just guessed from the parameter

//explicit return for exported / public functions => this can be infer by ts
export function toTitle(s: string): string {
  return `hello ${s}`;
}

//here the explicit return type become more important so that i can avoid
//this mistake return "0";
function booleanToNumber(flag: boolean): number {
  if (flag) {
    return 1;
  } else {
    return 0;
  }
}
//on hovering =>function loadCountInfered(): Promise<number>
async function loadCountInfered() {
  return 42;
}

loadCountInfered().then((n) => console.log(n));
