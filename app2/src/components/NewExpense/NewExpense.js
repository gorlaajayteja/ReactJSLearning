import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

const NewExpense = (props) => {
  const onSaveExpenseDataHandler = (enteredExpenseData) =>{
    const expenseData ={
      ...enteredExpenseData,
      id:Math.random().toString()
    }
    props.onNewExpensedata(expenseData)
  }
  return (
    <div className="new-expense">
        <ExpenseForm onSaveExpenseData = {onSaveExpenseDataHandler}/>
    </div>
  );
};

export default NewExpense;