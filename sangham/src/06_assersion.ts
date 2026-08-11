const raw = '{"id":1,"name":"july","hour":"important"}';

const risky = JSON.parse(raw) as { id: number; name: string };

console.log(risky.name);

console.log(JSON.stringify(risky));

type User22 = { id: number; name: string };

function isUser(v: unknown): v is User22 {
  return (
    typeof v === "object" &&
    v !== null &&
    "id" in v &&
    typeof (v as any).id === "number" &&
    "name" in v &&
    typeof (v as any).name === "string"
  );
}

const maybe = JSON.parse(raw) as unknown;
if (isUser(maybe)) {
  console.log(maybe.name);
}

//create small typescript poc project and apply this
