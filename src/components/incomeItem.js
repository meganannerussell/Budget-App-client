/* eslint-disable react/prop-types */
import React from "react";
import "semantic-ui-css/semantic.min.css";

const Item = ({ transaction, onDelete }) => {
  const { income_id, charge, amount } = transaction;

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
        key={income_id}
      >
        <span>{charge}</span>
        <div>
          <span style={{ color: "#3EB6B0" }}> + {amount}</span>
          <button
            style={{
              borderStyle: "none",
              backgroundColor: "#f0f8ff00",
              color: "lightGray",
              fontFamily: "unset",
              fontSize: 20,
            }}
            onClick={() => onDelete(income_id)} //why is this called in an anonymous function
          >
            x
          </button>
        </div>
      </li>
    </div>
  );
};

export default Item;
