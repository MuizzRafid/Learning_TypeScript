//typeof from primitives
function describeTypeOf(x: unknown) {
  if (typeof x === "string") {
    return "string";
  }
  if (typeof x === "number") {
    return "number";
  }
  if (typeof x === "boolean") {
    return false;
  }

  if (typeof x === "bigint") {
    return "bigInt";
  }
  if (typeof x === "symbol") {
    return "symbol";
  }

  if (typeof x === "undefined") {
    return "undefined";
  }
  if (typeof x === "function") {
    return () => {};
  }
  if (typeof x === null) {
    return null;
  }
  //The type of null is a object. so i check null first
  if (typeof x === "object") {
    return;
  }
}

console.log(
  describeTypeOf("hi"),
  describeTypeOf(11343),
  describeTypeOf(false),
  describeTypeOf({}),
  describeTypeOf(10n),
  describeTypeOf(null),
  describeTypeOf(() => {}),
  describeTypeOf(undefined),
  describeTypeOf(Symbol("Muizz")),
);

function info(z: unknown) {
  if (Array.isArray(z)) {
    return z;
  }

  if (z instanceof Date) {
    return new Date();
  }
  if (z instanceof Error) {
    return new Error("error is here ");
  }

  return "others";
}

console.log(info([1, 2, 3, 4]), info(new Date()), info({ x: 1 }));
