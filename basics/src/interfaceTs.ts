//signature
type TeaOrder = {
  type: string;
  sugar: number;
  strong: boolean;
};

function makeTea(order: { type: string; sugar: number; strong: boolean }) {
  console.log(order);
}

function serveTea(order: { type: string; sugar: number; strong: boolean }) {}

interface TeaRecipe {
  water: number;
  milk: number;
}
//This class promises to have all the properties and methods defined in TeaRecipe
class MilkTea implements TeaRecipe {
  water = 10;
  milk = 33;
}

interface cupSize {
  size: "small" | "medium";
}

class Tea implements cupSize {
  size: "small" | "medium" = "medium";
}

// type Response ={ok:true}|{ok:false}
// class myRes implements Response{
//     ok:boolean=true;
// }

type TeaType = "ginger" | "lemon";
//literal type

function orderTea(t: TeaType) {
  console.log(t);
}

type BaseChai = { teaLeves: number };
type Extra = { milk: number };
type MilkTea2 = BaseChai & Extra;

const cup: MilkTea2 = {
  teaLeves: 2,
  milk: 3,
};

type User = {
  username: string;
  bio?: string;
};

const u1: User = { username: "Muizz" };
const u2: User = { username: "Rafid", bio: "MuizzRafid" };

type Config = {
  readonly appName: string;
  version: number;
};

const cfg: Config = {
  appName: "Ostad",
  version: 1,
};
