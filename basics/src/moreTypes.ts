let response: any = 42;
// if the variable type in any i can force fully convert that
let numericLength: number = (response as string).length;

type Book = {
  name: string;
};

let bookString = '{"name":"who moved my Cheese"}';
//this is called type assertion and i said trust me this object has the shape of Book
let bookObject = JSON.parse(bookString) as Book;

console.log(bookObject); //when i give . to it i will get name

const inputElement = document.getElementById("username") as HTMLInputElement;

//the dengirous part of any
let value: any;
value = [1, 2, 3];
value = 2.5;
value.toUpperCase();
let newValue: unknown;
newValue = [1, 2, 3];
newValue = 2.5;

//newValue.toUpperCase();  getting error

if (typeof newValue === "string") {
  newValue.toUpperCase();
}

try {
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  }

  console.log("Error", error);
}

//because of data as string i am telling trust me data is string
//but if i console strData.toLowerCase() in the run time it
//told me its not a function but if i write strData. it typescript shows
//me the function of a string
const data: unknown = 22;
const strData: string = data as string;

type Role = "admin" | "user";
function redirectBasedOnRole(role: Role): void {
  if (role === "admin") {
    console.log("redirecting to admin dashbaord");
    return;
  }
  if (role === "user") {
    console.log("redirecting to user dashBoard");
    return;
  }
  role;
}

function neverReturn(): never {
  while (true) {}
}
