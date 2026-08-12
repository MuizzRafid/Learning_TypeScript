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
    age: number,
  ) {}

  greet() {
    return `Hi I am the -> ${this.name}`;
  }
}

//Extrating the instance type

type PersonInstanceN1 = InstanceType<typeof User>;
