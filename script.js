class ExpenseTracker {
  constructor() {
    this.transactions = JSON.parse(localStorage.getItem("transactions")) || [];
    this.form = document.getElementById("transaction-form");
    this.transactionList = document.getElementById("transaction-list");

    this.initializeEventListeners();
    this.updateUI();
  }

  initializeEventListeners() {
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      this.addTransaction();
    });
  }

  addTransaction() {
    const description = document.getElementById("description").value;
    const amount = parseFloat(document.getElementById("amount").value);
    const type = document.getElementById("type").value;
    const category = document.getElementById("category").value;

    const transaction = {
      id: Date.now(),
      description,
      amount,
      type,
      category,
      date: new Date(),
    };

    this.transactions.push(transaction);
    this.updateLocalStorage();
    this.updateUI();
    this.form.reset();
  }

  deleteTransaction(id) {
    this.transactions = this.transactions.filter((t) => t.id !== id);
    this.updateLocalStorage();
    this.updateUI();
  }

  updateLocalStorage() {
    localStorage.setItem("transactions", JSON.stringify(this.transactions));
  }

  calculateTotals() {
    const income = this.transactions
      .filter((t) => t.type === "income")
      .reduce((acc, t) => acc + t.amount, 0);

    const expenses = this.transactions
      .filter((t) => t.type === "expense")
      .reduce((acc, t) => acc + t.amount, 0);

    return { income, expenses, balance: income - expenses };
  }

  updateUI() {
    const { income, expenses, balance } = this.calculateTotals();

    document.getElementById("balance").textContent = `$${balance.toFixed(2)}`;
    document.getElementById("income-total").textContent = `$${income.toFixed(
      2
    )}`;
    document.getElementById("expense-total").textContent = `$${expenses.toFixed(
      2
    )}`;

    this.renderTransactions();
  }

  renderTransactions() {
    this.transactionList.innerHTML = this.transactions
      .sort((a, b) => b.date - a.date)
      .map(
        (transaction) => `
                <div class="transaction-item">
                    <div>
                        <strong>${transaction.description}</strong>
                        <p>${transaction.category}</p>
                        <small>${new Date(
                          transaction.date
                        ).toLocaleDateString()}</small>
                    </div>
                    <div>
                        <p class="${
                          transaction.type === "income" ? "income" : "expense"
                        }">
                            ${
                              transaction.type === "income" ? "+" : "-"
                            }$${transaction.amount.toFixed(2)}
                        </p>
                        <button onclick="expenseTracker.deleteTransaction(${
                          transaction.id
                        })">Delete</button>
                    </div>
                </div>
            `
      )
      .join("");
  }
}

// Initialize the expense tracker
const expenseTracker = new ExpenseTracker();
