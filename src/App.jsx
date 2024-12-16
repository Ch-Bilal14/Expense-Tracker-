import React, { useState, useEffect } from "react";
import Expensese from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

let dummy_expense = [];
const App = () => {
  const [expenses, setExpenses] = useState(dummy_expense);

  useEffect(() => {
    fetch("http://localhost/test/sample-data/api.php")
      .then((response) => response.json())
      .then((data) => {
        setExpenses(data);
        // console.log(data);
      });
  }, []);

  const addExpenseHandler = (expense) => {
    const updatedExpense = [expense, ...expenses];
    setExpenses(updatedExpense);
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddexpense={addExpenseHandler} />
      <Expensese item={expenses} />
    </div>
  );
};

export default App;
