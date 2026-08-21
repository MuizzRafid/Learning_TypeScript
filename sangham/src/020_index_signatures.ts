//what i am telling is
//i have a key which is string and it map to a value which is number
type NumberDict = { [k: string]: number };
//this is the just a alternative syntax of {
//likes: 20,
//share:30,
//}

//[] -> An index signature is a TypeScript rule that tells TypeScript what kinds of
//  keys an object can have and what type of value those keys contain.

// here the what type of value likes can take wasn't mentioned  but typescript help to mention that
//by doing this i don't even have to fix the key . like for likes and share they are decided but
// for  k it can be anything

const counters: NumberDict = {};
counters["likes"] = 33;

const counter2: NumberDict = { ["shares"]: 33 };

//i can do the same using Record. It is more tighter and safer
type Metrices = Record<"likes" | "shares" | "view", number>;
const mm: Metrices = { likes: 1, view: 100, shares: 22 };

// when i work with dynamic keys and records i can use Map

const priceMap = new Map<string, number>();

priceMap.set("likes", 1);

type LooseMap = Record<string, number | undefined>;

const lm: LooseMap = { likes: undefined };
lm["x"] = undefined;
