type User = {
  id: string; //required property mandatory
  name: string; //mandatory
  email?: string; //optional but if present must be string
  readonly createdAt: Date; //can not be reassigned
};
const user1: User = { id: "1", name: "muizz", createdAt: new Date() };
//not getting error because email is optional

type Count = { [k: string]: number };
type Count1 = Record<"likes" | "views" | "shares", number>;

const c1: Count = { july: 1 };
const c2: Count1 = { likes: 5, views: 3, shares: 7 };
