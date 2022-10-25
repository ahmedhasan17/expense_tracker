import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isOpening, setIsOpening] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsOpening(false);  
  };

  const OpeningHandler = () => {
    setIsOpening(true);
  };

  const stopOpeningHandler = () => {
    setIsOpening(false);
  };

  return (
    <div className="new-expense">
      {!isOpening && <button onClick={OpeningHandler}>Add New Expense</button>}
      {isOpening && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onStop={stopOpeningHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
