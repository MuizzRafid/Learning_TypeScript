interface Tea {
  readonly id: number;
  flavour: string;
  price: number;
  ginger?: boolean;
}

const milktea: Tea = {
  id: 1,
  flavour: "milk",
  price: 20,
};

interface DiscountCal {
  (price: number): number;
}

const apply50: DiscountCal = (p) => p * 0.5;

interface TeaMachine {
  start(): void;
  stop(): void;
}

const machine: TeaMachine = {
  start() {
    console.log("start");
  },
  stop() {
    console.log("stop");
  },
};

interface TeaRatings {
  [flavour: string]: number;
}

const ratings: TeaRatings = {
  milkTea: 4.5,
};

interface Shop {
  readonly id: number;
  name: string;
}

// interface merging ... if i declare interface with same name
//then when i will use that i have satisfy all of them

interface User {
  name: string;
}

interface User {
  age: number;
}

const u: User = {
  name: "muizz",
  age: 22,
};

interface A {
  a: string;
}
interface B {
  b: string;
}

interface C extends A, B {}
