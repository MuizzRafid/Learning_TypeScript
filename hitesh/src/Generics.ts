//generics
//this is my function uses T type generics and the para
//meter also T type so it will return an Array of T types
function wrapInArray<T>(item: T): T[] {
  return [item];
}

//i can give anytype of thing to my generic function

wrapInArray("sugar");
wrapInArray(27);
wrapInArray({ flavor: "ginger" });

function pair<A, B>(a: A, b: B): [A, B] {
  return [a, b];
}

pair("tea", "black");
pair("tea", { flavor: "ginger" });

//generic interface

interface Box<T> {
  content: T;
}

const numberBox: Box<number> = { content: 23 };

//uses in The real world

//1.For calling the Api exios
//2. in define the Form

interface ApiPromise<T> {
  status: number;
  data: T;
}

const res: ApiPromise<{ flavor: string }> = {
  status: 200,
  data: { flavor: "milk" },
};
