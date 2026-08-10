type Direction = "left" | "right";

function move(d: Direction) {
  console.log(d);
}

const d1 = "left"; //ts keeps literal type "left";
move(d1); //i don't get any error here

let d2 = "right"; //ts widens to string
//because i take let i can change the value after initalize

//move(d2);//getting error

let d3: Direction = "right";

d3 = "left"; //now if i assign later i only have two options
move(d3);
