const ROLES = ["admin", "user", "operator"] as const;
//if i want to lock this that i can only have those 3 then i add as const at
//end and then it becomes readonly

//derive a union from the array
type Role = (typeof ROLES)[number];

function setRole(r: Role) {
  console.log(r);
}

//setRole('admin1')// getting error only use "admin", "user","operator";
