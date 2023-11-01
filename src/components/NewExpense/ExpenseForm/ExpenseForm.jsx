import React, { useState } from "react";
import "./expenseForm.scss";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const titleHandler = (e) => {
    setEnteredTitle(e.target.value);
    // setUserInput({
    //     enteredTitle: e.target.value,
    //     ...userInput
    // })
  };

  const amountHandler = (e) => {
    setEnteredAmount(e.target.value);
    // setUserInput({
    //     enteredAmount: e.target.value,
    //     ...userInput
    // })
    // setUserInput((prevState) => {
    //     return {
    //         ...prevState,
    //         enteredAmount: e.target.value
    //     };
    // })
  };

  const dateHandler = (e) => {
    setEnteredDate(e.target.value);
    // setUserInput({
    //     enteredDate: e.target.value,
    //     ...userInput
    // })
  };

  const inputChangeHandler = (identifier, value) => {
    if (identifier === "title") setEnteredTitle(value);
    else if (identifier === "amount") setEnteredAmount(value);
    else if (identifier === "date") setEnteredDate(value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    
    props.onSaveExpenseDataHandler(expenseData);
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={enteredTitle}
            onChange={(e) => inputChangeHandler("title", e.target.value)}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            step={0.01}
            min={0.01}
            id="amount"
            value={enteredAmount}
            onChange={(e) => inputChangeHandler("amount", e.target.value)}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            value={enteredDate}
            onChange={(e) => inputChangeHandler("date", e.target.value)}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
