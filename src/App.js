import ExpenseItem from "./components/ExpenseItem";
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
            <h2>Lets get started</h2>
        <ExpenseItem date={expenses[0].date} title={expenses[0].title} amount={expenses[0].amount} />
        <ExpenseItem date={expenses[1].date} title={expenses[1].title} amount={expenses[1].amount} />
        <ExpenseItem date={expenses[2].date} title={expenses[2].title} amount={expenses[2].amount} />
        <ExpenseItem date={expenses[3].date} title={expenses[3].title} amount={expenses[3].amount} />

        </div>
    )
}
export default App;