type User = {
  id: string; //required property mandatory
  name: string; //mandatory
  email?: string; //optional but if present must be string
  readonly createdAt: Date; //can not be reassigned
};
const user1: User = { id: "1", name: "muizz", createdAt: new Date() };
//not getting error because email is optional

type Count = { [k: string]: number };
//creating a type that describes what all key value pairs in an object must look like
type Count1 = Record<"likes" | "views" | "shares", number>;

//Record is build in generic type
//Count1 means Record< what are the keys?, what type should the values be?>
//the union inside the record not work like using in variable they Means
//"Here is the complete set of keys that this object must have"

const c1: Count = { july: 1 };
const c2: Count1 = { likes: 5, views: 3, shares: 7 };
