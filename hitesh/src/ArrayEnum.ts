const teaFlavours: string[] = ["sugar", "ginger"];

const teaPrice: number[] = [10, 20];

const rating: Array<number> = [4.5, 5.0];

type tea = {
  name: string;
  price: number;
};

const menu: tea[] = [
  { name: "milktea", price: 20 },
  { name: "milktea", price: 20 },
];

menu.push({ name: "jj", price: 30 });

const cities: readonly string[] = ["pg", "rg"];

//multidimention array

const table: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

let teaTuple: [string, number];
teaTuple = ["ginger", 20];

let userInfo: [string, number, boolean?];
userInfo = ["muizz", 100];

const location: readonly [number, number] = [28, 32.4];

const teaItema: [name: string, price: number] = ["green", 33];

enum CupSize {
  SMALL,
  MEDIUM,
  LARGE,
}

const size = CupSize.LARGE;

enum Status {
  PENDING = 100,
  SERVED,
  CANCELLED,
}

enum teaType {
  MASALA = "masala",
  GINGER = "giner",
}

function makeTea(type: teaType) {
  console.log(`Making : ${type}`);
}

makeTea(teaType.GINGER);
