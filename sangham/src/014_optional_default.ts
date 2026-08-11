function greetPersonOptional(name?: string): string {
  const upperRes = name ? name.toUpperCase() : "Guest";

  return `hello ${upperRes}`;
}

console.log(greetPersonOptional("Muizz"));
console.log(greetPersonOptional()); //hello undefined

function greetPersonDefault(name: string = "Guest") {
  const uppRes = name?.toUpperCase();
  return `hello ${uppRes}`;
}

console.log(greetPersonDefault());

function connect(host: string, port?: number, secure?: boolean) {
  const p = port ?? 80;
  const s = secure ?? false;

  return `Connect ${host} ${port} , ${secure}`;
}

connect("localhost", 100, false);
