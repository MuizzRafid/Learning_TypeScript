let username: string = "muizz";

let age: number = 40;

let isCreator: boolean = true;

const big: bigint = 2n ** 63n - 1n;

//operator '+' cannot applied to  different types like 'bigint' and 'number'
// const mixed=big+age;

const TOKEN: unique symbol = Symbol("TOKEN");

function yearsToDay(years: number): number {
  return years * 365;
}

console.log(username.toUpperCase());

//unique symbol is a special TypeScript type that treats a symbol as its own one-of-a-kind value, not just "any symbol."
// It can only come from calling Symbol(), calling Symbol.for(), or an explicit type annotation, and it can only
// be used on a const declaration or a readonly static class property, since the whole point is that it never changes.
// To refer back to that exact symbol's type elsewhere, you use typeof on it, same as typeof User or typeof VARIANTS.
//  The key idea is that every unique symbol is tied to one specific declaration, so two symbols are never considered
// the same type even if they look identical, unless they're literally the same declared symbol, making it TypeScript's
// way of guaranteeing true, unmistakable uniqueness.
