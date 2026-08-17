//Exclude<U, V> -> remove from U those member assinable to V
//Extract<U, V>-> keep from u those members assiable to V
//Nonnullable

type EventType1 = "click" | "submit" | "hover" | "keydown" | "keyUp";

type EventType2 = Exclude<EventType1, "keydown">;

function handleEvent(e: EventType2) {
  console.log(e);
}

handleEvent("keyUp"); //couldn't found keydown

type ActionN1 = "create" | "update" | "delete" | "read";

//Oposide of Exclude

type ActionN2 = Extract<ActionN1, "create" | "update">;

function handleEvent2(e: ActionN2) {
  console.log(e);
}

handleEvent2("create");

type MayBeNumber = number | null | undefined | string;
type CleanNumber = NonNullable<MayBeNumber>; // for nonNullable its discarding null and undefined
//its only can take number

function square(num: CleanNumber) {
  if (typeof num === "number") {
    return num * 2;
  }

  return Number(num) * 2;
}

square(10);
square("string");
