//goal -> understand when to let typescript infer types
//ts -> js very well
//when ts will writes the types / u r going to write

let count = 0; //ts sees number
const site = "acedevhub"; //it seestthe exact literal "acedevhub"

//over annotation isn't bad -> just too much noisy
//because ts know what it is

export function add(a: number, b: number): number {
  return a + b;
}

//i should also annotate when the is not obvious

let maybe: string | number;
