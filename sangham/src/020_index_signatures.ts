//what i am telling is
//i have a key which is string and it map to a value which is number
type NumberDict = { [k: string]: number };

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
