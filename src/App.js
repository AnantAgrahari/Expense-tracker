import React from 'react';
import Expenses from "./components/Expenses/Expenses"
import "./App.css";
function App(){
    let expenses=[
        {
            id:'e1',
            title:'School fee',
            amount:'250',
            date:new Date(2021,5,6)

        },
        {
            id:'e2',
            title:'Gym fee',
            amount:'350',
            date:new Date(2021,3,7)
        },
        {
            id:'e3',
            title:'Tution fee',
            amount:'450',
            date:new Date(2021,8,9)
        },
        {
            id:'e4',
            title:'Loan fee',
            amount:'550',
            date:new Date(2021,1,12)
        }
    ]
    return(
        <div>
            <h2 className="h2">List Down Your Expenses</h2>
        <Expenses item={expenses} />

        </div>
    )
}
export default App;