//type narrowing

function getChai(kind: string | number) {
  if (typeof kind === "string") {
    return `Making ${kind} tea...`;
    //when i hover over kind i only get suggestion related to string
  }
  return ` tea ordre : ${kind}`;
}

function serveTea(msg?: string) {
  if (msg) {
    return `serving  ${msg} `;
  }
  return `serving default green tea`;
}

function orderTea(size: "small" | "medium" | "large" | number) {
  if (size === "small") {
    return `small cutting tea  `;
  }
  if (size === "large") {
    return `make extra tea  `;
  }
  return `tea order ${size}`;
}

class KulhadTea {
  serve() {
    return `serving kulhad tea`;
  }
}

class Cutting {
  serve() {
    return `serving cutting tea`;
  }
}

function serve(tea: KulhadTea | Cutting) {
  if (tea instanceof KulhadTea) {
    return tea.serve();
  }
}

type teaOrder = {
  type: string;
  sugar: number;
};

function isTeaOrder(obj: any): obj is teaOrder {
  return (
    typeof obj === "object" &&
    obj != null &&
    typeof obj.type === "string" &&
    typeof obj.sugar === "number"
  );
}

function serveOrder(item: teaOrder | string) {
  if (isTeaOrder(item)) {
    return `Serving ${item.type} tea with ${item.sugar}`;
  }
  return `serving custom tea : ${item}`;
}

type greenTea = { type: "green"; leaf: number };
type blackTea = { type: "black"; amount: number };
type tea = greenTea | blackTea;

function MakeTea(order: tea) {
  switch (order.type) {
    case "black":
      return `black tea is here`;
      break;
    case "green":
      return `Green tea is here `;
      break;
  }
}
