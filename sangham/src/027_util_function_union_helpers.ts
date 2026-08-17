//ReturnType<F>
//Parameters<F>
//InstanceType<Ctor>
//ConstructorParameters<C>

function ExtractUserInfo(id: string, IsExtraInfo = false) {
  return {
    id,
    name: "Muizz",
    log: IsExtraInfo ? "details" : (undefined as string | undefined),
  };
}

type GetUserReturnInfo = ReturnType<typeof ExtractUserInfo>;
//// Extract the types of the arguments from the function
type GetUserParamsInfo = Parameters<typeof ExtractUserInfo>;

const argsInfo: GetUserParamsInfo = ["u1", true];
const resultInfo: GetUserReturnInfo = ExtractUserInfo(...argsInfo);

console.log(resultInfo);

class User {
  constructor(
    public name: string,
    public age: number,
  ) {}

  greet() {
    return `Hi I am the -> ${this.name}`;
  }
}

//Extrating the instance type
type PersonInstanceN1 = InstanceType<typeof User>;

//It's a tuple type — a fixed-length array where each position has its own type. It is not an object, and it is not a function —
// it's a description of "three values, in this order: string, number,

type PersonCtorArgN1 = ConstructorParameters<typeof User>;

//ConstructorParameters return a tuple

const resultInfo1: PersonCtorArgN1 = ["july", 20];
console.log(resultInfo1);

const InstanceUser: PersonInstanceN1 = new User(...resultInfo1);
console.log(InstanceUser.greet());
