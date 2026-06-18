let subs: number | string = "1M";

let apiRequestStatus: "pending" | "success" | "error" = "pending";

apiRequestStatus = "success";

let airlineSeat: "aisle" | "window" | "middle" = "middle";

const orders = ["12", "20", "28", "42"];

//let currentorder; //any-> i don't care the datatype. you can give anything

let currentorder: string | undefined;
for (let order of orders) {
  if (order === "28") {
    currentorder = order;
    break;
  }
}

console.log(currentorder);
