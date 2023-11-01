import React from 'react'
import ExpenseForm from './ExpenseForm/ExpenseForm'

import './newExpense.scss';

const NewExpense = (props) => {

  const saveExpenseDataHandler = (expense) => {
    const expenseData = {
      id: Math.random(),
      ...expense
    }
    props.onAddExpenseHandler(expenseData);
  }

  return (
    <div className='new-expense'>
        <ExpenseForm onSaveExpenseDataHandler={saveExpenseDataHandler} />
    </div>
  )
}

export default NewExpense