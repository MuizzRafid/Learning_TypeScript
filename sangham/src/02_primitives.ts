let username: string = "muizz";

let age: number = 40;

let isCreator: boolean = true;

const big: bigint = 2n ** 63n - 1n;

//operator '+' cannot applied to types 'bigint' and 'number'
// const mixed=big+age;

const TOKEN: unique symbol = Symbol("TOKEN");

function yearsToDay(years: number): number {
  return years * 365;
}

console.log(username.toUpperCase());
