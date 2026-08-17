//get
//set

class Temperature {
  #c = 0;

  constructor(celsius: number) {
    this.celsius = celsius;
  }

  get celsius(): number {
    return this.#c;
  }

  set celsius(value: number) {
    if (Number.isNaN(value)) throw new Error("not a number, check input");
    this.#c = value;
  }

  get fahrenheit(): number {
    return (this.#c * 9) / 5 + 32;
  }

  set fahrenheit(fvalue: number) {
    this.celsius = ((fvalue - 32) * 5) / 9;
  }
}

const t = new Temperature(20);

t.celsius = 43;
console.log(t.celsius);
console.log(t.fahrenheit);
t.fahrenheit = 200;
console.log(t.fahrenheit);
console.log(t.celsius);
