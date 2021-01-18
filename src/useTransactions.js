import {useContext} from 'react';
import { ExpenseTrackerContext } from "./context/context"

import { incomeCategories, expenseCategories, resetCategories } from "./constants/categories"


///coz of title we will know if it is a income or expense category
const useTransactions = (title) =>{
    ///after using transaction,
    ///to reset the amount of each category to 0
    resetCategories();

    const { transactions } = useContext(ExpenseTrackerContext);
    ///filering those with income or expenes categories
    const transactionsPerType = transactions.filter((t) => t.type === title);
    //then adding total amount
    const total = transactionsPerType.reduce((total, currVal) => total += currVal.amount, 0);
    const categories = title === "Income" ? incomeCategories : expenseCategories

    // console.log("transactionsPerType==>",transactionsPerType);
    // console.log("total==>",total);
    // console.log("Categories==>",categories);

    transactionsPerType.forEach((t) => {
        const category = categories.find((c) => c.type === t.category);

        if(category) category.amount += t.amount

        // console.log("Category==>", category);
    });

    const filteredCategories = categories.filter((c) => c.amount > 0)
    // console.log("filteredCategories ==>",filteredCategories);
    const chartData = {
        datasets: [{
            data: filteredCategories.map((c) => c.amount),
            backgroundColor: filteredCategories.map((c) => c.color)
        }],
        labels : filteredCategories.map((c) => c.type)
    }

    return { total, chartData }
}

export default useTransactions;