//Normal Array
const xss = [1, 2, 88, 7];
xss.push(8);
for (let key in xss) {
  console.log(xss[key], " ");
}

const ys: readonly number[] = [1, 2, 3];
//same as ys new way of writing
const yss: ReadonlyArray<number> = [1, 3, 4, 8];

xss[0] = 9; //mutable

//yss.push(3)  //get error

function sum(nums: readonly number[]): number {
  let s = 0;
  for (const n of nums) s += n;
  return s;
}

console.log(sum(xss)); //passing mutable array in readonly parameter is allowed

console.log(sum(ys));
