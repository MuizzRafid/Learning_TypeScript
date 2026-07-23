const mytea = {
  name: "milktea",
  price: 20,
  isHot: true,
};

//infer

// {
//     name:string;
//     price:number;
//     isHot:boolean
// }

let tea: {
  name: string;
  price: number;
  isHot: boolean;
};

tea = {
  name: "ginger tea",
  price: 25,
  isHot: true,
};

type Tea = {
  name: string;
  price: number;
  ingredients: string[];
};

const gingerTea: Tea = {
  name: "ginger",
  price: 25,
  ingredients: ["ginger", "tea leaves"],
};

type Cup = { size: string };
let smallCup: Cup = { size: "200ml" };
let bigCup = { size: "500ml", material: "steel" };

//if i give extra data it doesn't bother
smallCup = bigCup;

//but if i missed some
type Uuser = {
  username: string;
  password: string;
};

// const u:Uuser={
//     username:"me",
// }

//split data type
type Item = { name: string; quantity: number };
type Address = { street: string; pin: number };

type Order = {
  id: string;
  items: Item[];
  address: Address;
};

//some time we define data in a way use that many ways

type SuperTea = {
  name: string;
  price: number;
  isHot: boolean;
};

//the problem of  partial is it makes all data types partial
const updateTea = (updates: Partial<SuperTea>) => {
  console.log("Updating tea with", updates);
};

updateTea({ price: 25 });
updateTea({ isHot: false });
updateTea({}); // problem :some time we can pass empty data type

type ChaiOrder = {
  name?: string;
  quantity?: number;
};
const placeOrder = (order: Required<ChaiOrder>) => {
  console.log(order.name);
};

//whather when i created i give optional when i use Required i must need
//to give the all value

placeOrder({
  name: "a",
  quantity: 2,
});

//Pick
// pick help us to select which property i want to use
type letsTea = {
  name: string;
  price: number;
  isHot: boolean;
  ingredients: string[];
};

type BasicTeaInfo = Pick<letsTea, "name" | "price">;

const finalTea: BasicTeaInfo = {
  name: "lemon",
  price: 20,
};

//Omit
//when i use omit i don't need to include that
type newTea = {
  name: string;
  price: number;
  isHot: boolean;
  ingredients: string;
};
type publicTea = Omit<newTea, "ingredients">;
const ft: publicTea = {
  name: "t",
  price: 30,
  isHot: true,
};
