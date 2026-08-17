class BankAccount {
  public owner: string;

  private balance = 0;
  #otp = 134;

  constructor(owner: string) {
    this.owner = owner;
  }

  deposit(amt: number) {
    if (amt <= 0) throw new Error("Amount must be positive");
    this.balance += amt;
  }

  getBalance() {
    return this.balance;
  }

  varifyOtp(code: number) {
    return this.#otp === code; //only accessable inside class
  }
}

const acc = new BankAccount("Muizz");

acc.deposit(5000);
console.log(acc.getBalance());
console.log(acc.varifyOtp(14));
