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
