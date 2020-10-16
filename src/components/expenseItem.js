/* eslint-disable react/prop-types */
import React from "react";
import "semantic-ui-css/semantic.min.css";

const Item = ({ transaction, onDelete }) => {
  const { expense_id, charge, amount } = transaction;

  return (
    <div>
      <li
        style={{
          listStyleType: "none",
          display: "flex",
          justifyContent: "space-between",
          padding: 8,
          borderTopStyle: "solid",
          borderTopWidth: 1,
          borderTopColor: "#d3d3d35c",
        }}
        key={expense_id}
      >
        <span>{charge}</span>
        <div>
          <span style={{ color: "#DD4343" }}> - {amount}</span>
          <button
            style={{
              borderStyle: "none",
              backgroundColor: "#f0f8ff00",
              color: "lightGray",
              fontFamily: "unset",
              fontSize: 20,
            }}
            onClick={() => {
              console.log("deleted"), onDelete(expense_id);
            }}
          >
            x
          </button>
        </div>
      </li>
    </div>
  );
};

export default Item;
