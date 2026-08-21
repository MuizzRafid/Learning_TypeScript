type InExample1 = { role: "Admin"; permissions: string[] };

type InExample2 = { role: "User"; expiresAt: Date };

type UserExample = InExample1 | InExample2;

function describeUserExample(u: UserExample) {
  if ("permissions" in u) {
    return `Admin ${u.permissions.join(",")}`;
  }

  return `User ${u.expiresAt.toISOString()}`;
}

console.log(describeUserExample({ role: "Admin", permissions: ["read"] }));

//avoid runtime crashes

//when i try to access deep properties in a object means
//a->b->c->d (a has object b ... so on). so i need to check all if one break the whole thing break

//so we use nullish and falsy

//?? and ||

//optional chaining
//obj?.a

type ProfileN3 = {
  name: string;
  contact?: { email?: string };
};

const P1N3: ProfileN3 = { name: "jhon" };
const P2N3: ProfileN3 = {
  name: "Benn",
  contact: { email: "ben123@gmail.com" },
};

//The example of optional chaining . If that present then it will get email
const email1N3 = P1N3.contact?.email;

//?? ->uses the right hand default only when the left is null or undefined
//||-> uses the default when the left is any falsy value(0,"",null, undefined, NaN)

//countFromServerN3    ??    100
//   ↑                ↑      ↑
//left-hand        operator  right-hand
//(left side)                (right side)
const countFromServerN3: number | null = 0;
const labelFromServerN3: string | undefined = "";

const aN3 = countFromServerN3 ?? 100; //keeps the 0
const bN3 = countFromServerN3 || 100;

console.log(aN3);

console.log(bN3);
