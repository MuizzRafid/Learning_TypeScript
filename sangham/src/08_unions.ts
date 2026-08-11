//value->this OR that

function printId(id: string | number) {
  // console.log(id.toUpperCase());  // error

  //for union i need to give a if else check

  if (typeof id === "string") {
    id.toUpperCase();
  } else {
    id.toFixed(2);
  }
}

//object union

type Admin = { role: "Admin"; permissions: string[] };
type Customer = { role: "Customer"; loyaltyPoints: number };

function description(u: Admin | Customer) {
  // console.log(u.permissions);  //getting error

  if (u.role === "Admin") {
    console.log(u.permissions);
  } else {
    console.log(u.loyaltyPoints);
  }
}

function describeUserWithInOperator(u: Admin | Customer) {
  if ("permissions" in u) {
    console.log(u.role, "Admin User");
  } else if ("loyaltyPoints" in u) {
    console.log(u.role, "Customer User");
  }
}

//array of unions and union of arrays

const arrOfUnion: (string | number)[] = ["a", "b", 2, 34, 88, 8, "c"];

//either the array have string or number
const unionOfArrays: string[] | number[] =
  Math.random() > 0.1 ? ["x", "y"] : [1, 3];

// unionOfArrays.push("z") //getting error
