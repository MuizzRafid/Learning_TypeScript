//value must be everthing from A and from B

type Inter1 = { id: string };

type Inter2 = { createdAt: Date };

type Entity = Inter1 & Inter2; //must have both id and createdId

type entity3 = Inter1 & Inter2 & Entity;

const e: Entity = { id: "1", createdAt: new Date() };

type NumberHolderUnique = { a: number };
type StringHolderUnique = { a: string };

type NumberStringMix = NumberHolderUnique & StringHolderUnique;
//in NumberStringMix a become type never  === a:never
//const forA: NumberStringMix={a:"z"}
