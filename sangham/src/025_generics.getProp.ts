type UserN7 = {
  id: string;
  name: string;
  email?: string; //T['email']
};

function getUserN7<T, K extends keyof T>(userN7: T, userK7: K): T[K] {
  return userN7[userK7];
}

const uN7: UserN7 = {
  id: "1",
  name: "july",
};

console.log(getUserN7(uN7, "id"));

function setUserPropN7<T, K extends keyof T>(
  objN7: T,
  keyN7: K,
  value: T[K],
): void {
  objN7[keyN7] = value;
  console.log(objN7);
}

setUserPropN7(uN7, "name", "Muizz");
