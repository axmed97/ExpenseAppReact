import React from "react";
import ExpenseItem from "../ExpenseItem/ExpenseItem";

const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return <p className="no-content">No Expenses Data</p>;
  }

  return props.items.map((item) => {
    return (
      <ExpenseItem
        key={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
      />
    );
  });
};

export default ExpenseList;
