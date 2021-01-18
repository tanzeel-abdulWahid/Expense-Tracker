import React from 'react'

//sometimes gives 0 and 1 and is boolean
const isIncome = Math.round(Math.random())

const InfoCard = () => {
    return (
        <div style={{textAlign:"center", padding:"0 10%"}}>
            Try saying: <br />
            Add { isIncome ? "Income " : "Expense " }
            for { isIncome ? "100$ " : "50$ " }
            in category { isIncome ? "Business " : "Travel " }
            for { isIncome ? "Tuesday " : "Friday " }
        </div>
    )
}

export default InfoCard;
