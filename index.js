class BankAccount {
  constructor(accountHolderName, accountType) {
    this.accountHolderName = accountHolderName;
    this.accountType = accountType;
    this.balance = 0;
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
    } else {
      throw new Error("Invalid deposit amount");
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
    } else {
      throw new Error("Insufficient funds or invalid withdrawal amount");
    }
  }

  checkBalance() {
    return this.balance;
  }
}

const account = new BankAccount();

document.getElementById("depositBtn").addEventListener("click", () => {
  const amount = parseFloat(document.getElementById("amount").value);
  try {
    account.deposit(amount);
    document.getElementById("result").textContent = `Deposited $${amount}`;
  } catch (error) {
    document.getElementById("result").textContent = error.message;
  }
});

document.getElementById("withdrawBtn").addEventListener("click", () => {
  const amount = parseFloat(document.getElementById("amount").value);
  try {
    account.withdraw(amount);
    document.getElementById("result").textContent = `Withdrawn $${amount}`;
  } catch (error) {
    document.getElementById("result").textContent = error.message;
  }
});

document.getElementById("checkBalanceBtn").addEventListener("click", () => {
  const balance = account.checkBalance();
  document.getElementById("result").textContent = `Balance: $${balance}`;
});
