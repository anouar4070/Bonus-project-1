import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";


const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2024");

  // let filterInfoText = "2022, 2023 & 2025";

  // if (filteredYear === "2022") {
  //   filterInfoText = "2023, 2024 & 2025";
  // } else if (filteredYear === "2024") {
  //   filterInfoText = "2022, 2023 & 2025";
  // } else if (filteredYear === "2023") {
  //   filterInfoText = "2022, 2024 & 2025";
  // } else {
  //   filterInfoText = "2022, 2023 & 2024";
  // }

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        {/* <p>Data for years {filterInfoText} is hidden.</p> */}

        {/* {props.items.map((expense) => ( */}
        {/* {expensesContent} */}
        <ExpensesList items={filteredExpenses} />

        {/* <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        /> */}
      </Card>
    </div>
  );
};

export default Expenses;
