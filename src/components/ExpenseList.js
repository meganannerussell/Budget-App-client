/* eslint-disable react/prop-types */
import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Table } from "semantic-ui-react";
import Item from "./expenseItem";
import "./ExpenseList.css"

export const ExpenseList = ({ expenses, onDelete }) => {
  return (
    <div>
      <h2 className="headTwo">EXPENSES</h2>
      
      <Table className="table" basic='very' striped>
        <Table.Body>
          {expenses.map((expense) => {
            return (
              <Table.Row key={expense.expense_id}>
                <Item
                  key={expense.expense_id}
                  transaction={expense}
                  onDelete={onDelete}
                />
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
};
