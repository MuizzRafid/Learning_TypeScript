class tea {
  flavour: string;
  //   price: number;
  // constructor(flavour:string,price:number){
  //     this.flavour=flavour;
  //     this.price=price;
  // }
  constructor(flavour: string) {
    this.flavour = flavour;
  }
}

const milkTea = new tea("milk");
milkTea.flavour = "milk";

class Tea {
  public flavor: string = "milk";
  private secretIngredients = "cardamon";
  reveal() {
    return this.secretIngredients; //ok
  }
}
class shop {
  protected shopName = "tea corner";
}

class Branch extends shop {
  getName() {
    return this.shopName; //ok
  }
}

const c = new Tea();

c.reveal();

// # tag also represent private
class Walet {
  #balance = 100;

  getBalance() {
    return this.#balance;
  }
}
const w = new Walet();

class Cups {
  readonly capacity: number = 250;
  constructor(capacity: number) {
    this.capacity = capacity;
  }
}
//i only can set capacity once then i will not change it

class ModernTea {
  private _sugar = 2;

  get sugar() {
    return this._sugar;
  }

  set sugar(value: number) {
    if (value > 5) throw new Error("Too sweet");
    this._sugar = value;
  }
}

const t = new ModernTea();
t.sugar = 3;

//static let me to access value after className
class oneTea {
  static shopName = "tea store";
  constructor(public flavour: string) {}
}

console.log(oneTea.shopName);

abstract class Drink {
  abstract make(): void;
}

// this concept is called composition it can extent class

class Heater {
  heat() {}
}

class TeaMaker {
  constructor(private heater: Heater) {}
  make() {
    this.heater.heat;
  }
}
