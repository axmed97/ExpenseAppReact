import ExpenseDate from "./ExpenseDate/ExpenseDate";
import Card from "../../UI/Card";

import React, { useState } from "react";

import "./expenseItem.scss";

function ExpenseItem(props) {

  const [title, setTitle] = useState(props.title);

  function clickHandler() {
    setTitle('Updated!');
  }

  return (
    <Card className="expense_item">
      <ExpenseDate date={props.date} />
      <div className="expense_item__description">
        <h2 className="expense_item__description__title">{title}</h2>
        <div className="expense_item__description__amount">
          {props.amount} ₼
        </div>
      </div>
      <button onClick={clickHandler} className="expense_item__btn">Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
