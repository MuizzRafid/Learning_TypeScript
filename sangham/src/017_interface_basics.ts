//interface-> named shape for objects

interface User333 {
  id: number;
  name: string;
  email?: string;
  readonly createdAt: Date;
}

const user333: User333 = {
  id: 1,
  name: "muizz",
  createdAt: new Date(),
};

interface Admin333 extends User333 {
  permission: ("admin" | "officer")[];
  //this means the array one have two types of element
}

const admin333: Admin333 = {
  id: 1,
  name: "muizz",
  createdAt: new Date(),
  permission: ["admin"],
};

interface withMeta1 {
  meta: {
    active: boolean;
  };
}
//multiple inheritance
interface AdminWithMeta extends Admin333, withMeta1 {}

const adminWithMeta: AdminWithMeta = {
  id: 1,
  name: "muizz",
  createdAt: new Date(),
  permission: ["admin"],
  meta: {
    active: true,
  },
};
