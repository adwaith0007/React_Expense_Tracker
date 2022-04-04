import React from 'react'
import './Expenses.css'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
function Expenses(props) {
  return (
    <Card className='expenses'>
         <ExpenseItem title={props.Items[0].title}
      amount={props.Items[0].amount}
      date={props.Items[0].date} 
      
      ></ExpenseItem>
      <ExpenseItem title={props.Items[1].title}
      amount={props.Items[1].amount}
      date={props.Items[1].date} 
      
      ></ExpenseItem>
      <ExpenseItem title={props.Items[2].title}
      amount={props.Items[2].amount}
      date={props.Items[2].date} 
      
      ></ExpenseItem>
      <ExpenseItem title={props.Items[3].title}
      amount={props.Items[3].amount}
      date={props.Items[3].date} 
      
      ></ExpenseItem>
    </Card>
  )
}

export default Expenses