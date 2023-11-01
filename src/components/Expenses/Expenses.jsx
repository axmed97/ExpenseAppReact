import React, { useEffect, useState } from "react";

import ExpenseItem from "./ExpenseItem/ExpenseItem";
import Card from "../UI/Card";

import "./expenses.scss";
import ExpenseFilter from "./ExpenseFilter/ExpenseFilter";
import ExpenseList from "./ExpenseList/ExpenseList";
import ExpenseChart from "./ExpenseChart/ExpenseChart";

function Expenses(props) {
  const [filteredYear, setFilteredyear] = useState("2023");

  const filterChangeHandler = (selectedYear) => {
    setFilteredyear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return filteredYear === 'all' ?  props.items : expense.date.getFullYear().toString() === filteredYear;
  })

  

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseChart expenses={filteredExpenses} />
      <ExpenseList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
