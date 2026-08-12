function sumAllNumbers(...xs: number[]): number {
  //collect however many individual arguments are passed, and gather them into one array called xs
  return xs.reduce((s, n) => s + n, 0);
}

console.log(sumAllNumbers(1, 3, 4, 8, 3));

//tuple rest

function makeRange(
  ...args: [start: number, end: number, step?: number]
): number[] {
  const [start, end, step = 1] = args;
  // Array Destructuring
  // const start = args[0];
  // const end   = args[1];
  // const step  = args[2];
  const out: number[] = [];

  for (let n = start; n <= end; n += step) out.push(n);

  return out;
}

console.log(makeRange(1, 5));
console.log(makeRange(2, 10, 2));

function draw(x: number, y: number) {
  console.log(x, y);
}

const points = [10, 20];
//draw(...points);
// getting error becuase not a fixed [number, number]
//this is not a tuple

const points2: [number, number] = [10, 20];
points2[1] = 30;
draw(...points2);

//also i this way i can do

const fixedPoints = [30, 40] as const;
draw(...fixedPoints);
