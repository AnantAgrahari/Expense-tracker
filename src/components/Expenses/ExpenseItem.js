import React, { useState } from 'react';   //useState funct. returns an array.
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
const ExpenseItem=(props)=>{
     const [title,setTitle]=useState(props.title);  //setTitle is a func. which is used to update the title//title is a variable used to assign values.
                                                   //destructuring of array is used to assign a variable to each value//

    const clickHandler=()=>{                            
       setTitle('New Title');
    }
 return(
  
        <Card className="expense-item">
           <ExpenseDate date={props.date} />
        <div className="expense-item_description"><h2>{title}</h2>
        <div className="expense-item_price">{props.amount}</div>
        </div>
        <button onClick={  clickHandler  }>Change Title</button>  
    </Card>
    
    
 );
}
export default ExpenseItem;