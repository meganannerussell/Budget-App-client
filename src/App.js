/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import "./App.css";
import { IncomeList } from "./components/IncomeList";
import { ExpenseList } from "./components/ExpenseList";
import { Alert } from "./components/Alert";
import wave from "./images/waves.jpg";
import {
  createExpense,
  createIncome,
  deleteIncome,
  deleteExpense,
  getExpenses,
  getIncomes,
} from "./actions";
import { Container, Grid } from "semantic-ui-react";

function App() {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [option, setOption] = useState("+");
  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState("");
  const [alert, setAlert] = useState({ show: false });

  const fetchIncomes = async () => {
    const fetchedIncomes = await getIncomes();
    setIncomes(fetchedIncomes);
  };

  const fetchExpenses = async () => {
    const fetchedExpenses = await getExpenses();
    setExpenses(fetchedExpenses);
  };

  useEffect(async () => {
    fetchIncomes();
    fetchExpenses();
  }, []);

  const handleCharge = (e) => {
    setCharge(e.target.value);
    // console.log(e.target.value)
  };

  const handleAmount = (e) => {
    const amount = parseInt(e.target.value);
    if (!isNaN(amount)) {
      setAmount(amount);
    } else {
      handleAlert({
        type: "danger",
        text: `charge can't be empty value and the amount has to be bigger than zero`,
      });
    }
  };

  const handleOption = (e) => {
    setOption(e.target.value);
    console.log(`select: ${e.target.value}`);
  };

  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (charge !== "" && amount > 0) {
        if (option === "+") {
          //  const singleIncome = await createIncome({ charge, amount });
          await createIncome({ charge, amount });
          fetchIncomes();
          // handleAlert({type:'success', text: 'item added'})
          clearFields();
          // setIncomes([...incomes, singleIncome])
        } else if (option === "-") {
          await createExpense({ charge, amount });
          fetchExpenses();
          // handleAlert({type:'success', text: 'item added'})
          clearFields();
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const clearFields = () => {
    setCharge("");
    setAmount("");
  };

  const handleDelete = async(id) => {
    deleteIncome(id);
    const updatedIncomes = incomes.filter((income) => income.income_id !== id);
    // const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setIncomes(updatedIncomes);
    // setExpenses(updatedExpenses);
    await deleteExpense(id);
    const updatedExpenses = expenses.filter(
      (expense) => expense.expense_id !== id
    );
    setExpenses(updatedExpenses);
  };

  const expenseTotal = expenses.reduce((acc, curr) => {
    return (acc += parseInt(curr.amount));
  }, 0);

  const incomeTotal = incomes.reduce((acc, curr) => {
    return (acc += parseInt(curr.amount));
  }, 0);

  return (
    <div className="App">
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <div>
        {" "}
        <img className="Img" src={wave} />
      </div>
      <div className="Header">
        <h1 style={{ padding: 10 }}>Budgeting App</h1>
        <h1>
          {/* Total Balance: */}
          <span style={{ fontWeight: 100, fontSize: 40 }}>
            {" "}
            {incomeTotal - expenseTotal}
          </span>
        </h1>
        <div className="incomeContainer">
          <p style={{ margin: 0, fontSize: 14 }}>TOTAL INCOME</p>
          <span>
            <h3 style={{ fontWeight: 100, fontSize: 16 }}>+{incomeTotal}</h3>
          </span>
        </div>
        <div className="expenseContainer">
          <p style={{ margin: 0 }}>TOTAL EXPENSE </p>
          <span>
            <h3 style={{ fontWeight: 100, fontSize: 16 }}>-{expenseTotal}</h3>
          </span>
        </div>
      </div>
      <Form
        charge={charge}
        amount={amount}
        option={option}
        handleOption={handleOption}
        handleAmount={handleAmount}
        handleCharge={handleCharge}
        handleSubmit={handleSubmit}
      />

      <div className="lists">
        <Container>
          <Grid columns={2}>
            <Grid.Column width={8}>
              <IncomeList incomes={incomes} onDelete={handleDelete} />
            </Grid.Column>
            <Grid.Column width={8}>
              <ExpenseList expenses={expenses} onDelete={handleDelete} />
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default App;
