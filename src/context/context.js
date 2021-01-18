import React, {createContext, useReducer} from 'react'

import contextReducer from "./contextReducer";
///getting data from local storage
const initialState = JSON.parse(localStorage.getItem("transactions"))  || [{"amount":50000,"category":"Investments","type":"Income","date":"2021-01-09","id":"a052596f-356c-4caf-adbd-e95c70f6f976"},{"amount":6969,"category":"Food","type":"Expense","date":"2021-01-09","id":"55c70dfd-5caa-4f06-aee5-e09ffabc1891"},{"amount":60000,"category":"Lottery","type":"Income","date":"2021-01-09","id":"c1262ca5-c7c6-4870-9b29-dde5ef470e06"},{"amount":55000,"category":"Clothes","type":"Expense","date":"2021-01-09","id":"52dff4cf-81ad-4367-b4cb-00e1f16135cc"}];


export const ExpenseTrackerContext = createContext(initialState)

export const Provider = ({ children }) =>{
    ///uerReducer == an alternative to useState
    const [transactions, dispatch] = useReducer(contextReducer, initialState)
    
    ///actions center
    const deleteTransaction = (id) =>{
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id
        })
    }
    const addTransaction = (transaction) =>{
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transaction
        })
    }
    // console.log("trans==>",transactions);
    const balance = transactions.reduce((acc,curVal) => curVal.type === "Expense" ? acc - curVal.amount : acc + curVal.amount ,0);

    return(
        <ExpenseTrackerContext.Provider value={{
            ///we can access these functions in our whole app
            deleteTransaction,
            addTransaction,
            transactions,
            balance,
        }}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}