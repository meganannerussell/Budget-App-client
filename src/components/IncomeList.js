/* eslint-disable react/prop-types */
import React from "react";
import "semantic-ui-css/semantic.min.css";
import Item from "./incomeItem";
import "semantic-ui-css/semantic.min.css";
import { Table } from "semantic-ui-react";

export const IncomeList = ({ incomes, onDelete }) => {
  return (
    <div>
      <h2 style={{ fontWeight: 100, color: "#3EB6B0", fontSize: 20 }}>
        INCOMES
      </h2>

      <Table basic="very" striped lines>
        <Table.Body>
          {incomes.map((income) => {
            return (
              <Table.Row key={income.income_id}>
                <Item
                  key={income.income_id}
                  transaction={income}
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
