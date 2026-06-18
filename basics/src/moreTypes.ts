let response: any = 42;

let numericLength: number = (response as string).length;

type Book = {
  name: string;
};

let bookString = '{"name":"who moved my Cheese"}';
let bookObject = JSON.parse(bookString) as Book;

console.log(bookObject); //when i give . to it i will get name

const inputElement = document.getElementById("username") as HTMLInputElement;

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

const data: unknown = "tea";
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
