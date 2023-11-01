import React from "react";

import './expenseFilter.scss';

const ExpenseFilter = (props) => {

  const dropdownChangeHandler = (e) => {
    props.onChangeFilter(e.target.value);
  }

  return (
    <div className="expense-filter">
      <div className="expense-filter__control">
        <label>Filter by Year</label>
        <div>
          <select value={props.selected} onChange={dropdownChangeHandler} >
            <option value="all">All</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ExpenseFilter;
