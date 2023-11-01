import { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_DATA = [
  { id: 1, title: "Mi Band 8", amount: 100, date: new Date(2023, 9, 13) },
  { id: 2, title: "Mi Mijia", amount: 45, date: new Date(2023, 9, 13) },
  {
    id: 3,
    title: "ASUS Vivobook S15 OLED 2023",
    amount: 2699.99,
    date: new Date(2023, 6, 6),
  },
];

function App() {
  const [expensesData, setExpensesData] = useState(DUMMY_DATA);

  const addExpenseHandler = (expense) => {
    setExpensesData((prev) => {
      return [expense, ...expensesData]
    });
  };

  return (
    <div className="App">
      <NewExpense onAddExpenseHandler={addExpenseHandler} />
      <Expenses items={expensesData} />
    </div>
  );
}

export default App;
