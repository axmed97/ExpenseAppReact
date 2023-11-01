import React from "react";

import './expenseDate.scss'

function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="expense_item__date">
      <div className="expense_item__date__month">{month}</div>
      <div className="expense_item__date_day">{day}</div>
      <div className="expense_item__date_year">{year}</div>
    </div>
  );
}

export default ExpenseDate;
