import React from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const Expensese = (props) => {
  return (
    <Card className="expenses">
      {props.item.map((expense) => (
        <ExpenseItem
          key={expense.id}
          date={expense.Date}
          title={expense.Title}
          amount={expense.Price}
        />
      ))}
    </Card>
  );
};

export default Expensese;
