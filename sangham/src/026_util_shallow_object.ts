//partial<T> -> make all the top level fields optional

type AddressN8 = {
  line1: string;
  city: string;
};

type User10 = {
  id: string;
  name: string;
  email?: string;
  address: AddressN8;
};

type UserPatch10 = Partial<User10>;

const patch10: UserPatch10 = {
  name: "sangham",
};

//Though i used partial but when i use address i need to give all the things
//it requires because it partial working shallow
const patch11: UserPatch10 = {
  address: {
    line1: "fd",
    city: "fdfa",
  },
};

//Required<T>

type UserAllRequiredN10 = Required<User10>;

const userAllPatch11: UserAllRequiredN10 = {
  id: "u3",
  name: "name3",
  address: { line1: "line3", city: "pg" },
  email: "test",
};

//ReadOnly<T>

type ReadOnlyUserN10 = Readonly<User10>;

const ReadonlyUser: ReadOnlyUserN10 = {
  id: "u4",
  name: "name4",
  address: { line1: "line4", city: "pg4" },
};

//ReadonlyUser.name="getting error"

//Pict<T,K>  ->keep only some properties

type PickUserN10 = Pick<User10, "id" | "name">;

const pickUser: PickUserN10 = {
  id: "u5",
  name: "name5",
};

//Omit<T,k> -> picking all the properties and then removing keys

type OmitUserN10 = Omit<User10, "id">;

const omitUser: OmitUserN10 = {
  name: "name6",
  address: { line1: "line6", city: "pg6" },
  // id:"u6" // getting error cause i omited that
};

//Record<K, V>

type RoleK = "admin" | "user" | "editor";
type RoleCheck = Record<RoleK, User10>;

const dirN10: RoleCheck = {
  admin: {
    id: "u7",
    name: "name7",
    address: { line1: "line7", city: "pg7" },
  },
  user: {
    id: "u7",
    name: "name7",
    address: { line1: "line7", city: "pg7" },
  },
  editor: {
    id: "u7",
    name: "name7",
    address: { line1: "line7", city: "pg7" },
  },
};
