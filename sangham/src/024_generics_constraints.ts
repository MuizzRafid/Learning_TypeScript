//<T> -> constraint T so that only certain shapes are allowed
//<T extends X>
//key constraints-> <K extends keyof T> -> k is must be a key of T

//suppose we use .length but we don't know what is T. it might be number, array
//so their is a issue

function lenN4<T extends { length: number }>(xN4: T): number {
  //T extends { length: number } means: "T can be any type you want — as long as it has a .length property that's a number."
  return xN4.length;
}

//console.log(lenN4(23344));
//hover: Argument of type 'number' is not assignable to parameter of type '{ length: number; }'
//The problem is that number doesn't have length
console.log(lenN4("hello"));
console.log(lenN4([2, 3, 4, 5]));
console.log(lenN4({ length: 33 }));

type UserN6 = { id: string; name: string; age?: number };

function userN6Extract<T, K extends keyof T>(
  arrN4: T[],
  keyN4: K,
): Array<T[K]> {
  return arrN4.map((item) => item[keyN4]);
}

const userN6: UserN6[] = [
  {
    id: "1",
    name: "name1",
    age: 22,
  },
  {
    id: "2",
    name: "name2",
  },
];

console.log(userN6Extract(userN6, "id"));
