//This is called a tuple type — not "array of strings," but "exactly these 3 exact values,
// at these exact positions, and you may never change any of them."
const ROLES = ["admin", "user", "operator"] as const;
//if i want to lock this , i can only have those 3 then i add as const at
//end and then it becomes readonly
//const ROLES: readonly ["admin", "user", "operator"]

//derive a union from the array
type Role = (typeof ROLES)[number];

function setRole(r: Role) {
  console.log(r);
}

//setRole('admin1')// getting error only use "admin", "user","operator";

//                  **** TYPE OF

//typeof, means two completely different things depending on where you write it.

// 1st : This typeof is a real JavaScript operator. It runs while your program is executing (at runtime),
// looks at an actual value sitting in memory, and gives back a string describing what kind of thing it is
//object, number

//2nd: This typeof does not run when your program executes. It doesn't produce a string. It doesn't do anything
//at runtime at all — in fact, it's completely erased when TypeScript compiles down to JavaScript (remember: types
//vanish, same as your interface from way earlier). All it does is ask TypeScript's compiler: "hey, what TYPE did
//you infer for this variable?" — and hands that type back so you can reuse it elsewhere.

//                         *** [numbers] means

//[number] asks for every box at once. Instead of picking one exact position, you're using the word number — meaning
//"any index, I don't care which one." When you ask "what could be at any index," TypeScript looks at everything
//sitting in any box and gives you all of them together, joined with | (or)

//                ********* ROLES ARRAY VS Role Type

//ROLES (the array) → for anything your app actually does while running — rendering options, validating input, iterating.
//Role (the type) → for anything TypeScript needs to check before the app even runs — making sure a function parameter,
//a prop, a return value can only ever be one of the allowed values.
