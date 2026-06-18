function makeTea(type: string, cups: number) {
  console.log(`Making ${cups} cups of ${type}`);
}

makeTea("greenTea", 2);

function getTeaPrice(): number {
  return 20;
}

function makeOrder(order: string) {
  if (!order) return null;
  return order;
}

//when don't want share any value
function logTea(): void {
  console.log("tea is ready");
}

// ******** optional parameter and default parameter

//default parameter
//if i write any default para it should write in the end
// function orderTea(type?:string){

// }
function orderTea(type: string = "haha") {}

function createTea(order: {
  type: string;
  supar: number;
  size: "small" | "large";
}): number {
  return 4;
}
