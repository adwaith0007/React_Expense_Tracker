import React, { useState } from 'react'
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter'

import Card from '../UI/Card'
import ExpensesList from './ExpensesList'
function Expenses(props) {
  const [filteredYer,setFilteredYear]=useState("2022")
  const filterChangeHandler =selectedYear=>{
    console.log('expenses.js');
    setFilteredYear(selectedYear);
  };
  const filteredExpenses=props.items.filter(expense=>{
    return expense.date.getFullYear().toString()===filteredYer;
  })
  
 
  
  return (
    <div>
    <Card className='expenses'>
      <ExpensesFilter selected={filteredYer} onChangeFilter={filterChangeHandler} />
      
        <ExpensesList items={filteredExpenses}/>
    </Card>
      </div>
  )
}

export default Expenses