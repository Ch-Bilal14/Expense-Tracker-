import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAoumt] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHnadler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHnadler = (event) => {
    setEnteredAoumt(event.target.value);
  };
  const dateChangeHnadler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      Title: enteredTitle,
      Price: enteredAmount,
      Date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAoumt("");
    setEnteredDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHnadler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHnadler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={enteredDate} onChange={dateChangeHnadler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
