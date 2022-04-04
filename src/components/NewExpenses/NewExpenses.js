import React, {useState} from 'react'
import './NewExpenses.css'
import ExpenseForm from './ExpenseForm'
function NewExpenses(props) {
  const [isEditing,setIsEditing]=useState(false);
  const saveExpenseDataHandilbar=(enteredExpenseData)=>{
    const expenseData={
      ...enteredExpenseData,
      id: Math.random().toString()
      
    };
    
     props.onAddExpense(expenseData);

  };

  const startEditingHandler=()=>{
    setIsEditing(true);
  }
  const stopEditingHandler=()=>{
    setIsEditing(false);
}
  
  return (
    <div className='new-expense'>
        {!isEditing && <button onClick={startEditingHandler} >Add New Expense</button>}
        {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandilbar} onCancel={stopEditingHandler} />}
       
    </div>
  )
}

export default NewExpenses