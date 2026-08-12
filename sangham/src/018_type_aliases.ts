//object shapes-> similar to interfaces
//union types(A|B)
//intersection types(A & B)

type Person = {
  id: string;
  address: string;
  salary: number;
};

const person1: Person = {
  id: "1",
  address: "address",
  salary: 1234,
};

//Understand where to use interface and where to use types

type Status = "new" | "paid" | "pending";

function nextActionCheck(s: Status): string {
  switch (s) {
    case "new":
      return "new";
    case "paid":
      return "paid";
    case "pending":
      return "pending";

    default:
      return "default";
  }
}

type ToMerge1 = { price: number };
type ToMerge2 = { stock: number };

type MergedProductInfo = Person & ToMerge1 & ToMerge2;
