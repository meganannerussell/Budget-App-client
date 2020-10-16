/* eslint-disable react/prop-types */
import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Button, Input } from "semantic-ui-react";
// import { v4 as uuidv4 } from "uuid";

const Form = ({
  charge,
  amount,
  option,
  handleOption,
  handleAmount,
  handleCharge,
  handleSubmit,
}) => {
  return (
    <div style={{ backgroundColor: "#F4F4F4", textAlign: "center" }}>
      <form onSubmit={handleSubmit}>
        <select
          style={{
            padding: 8,
            borderRadius: 4,
            borderStyle: "solid",
            borderColor: " #d3d3d399",
          }}
          value={option}
          onChange={handleOption}
        >
          <option value="+">+</option>
          <option value="-">-</option>
        </select>
        <Input
          placeholder="eg: rent"
          style={{ width: 300, margin: 8 }}
          onChange={handleCharge}
          value={charge}
        />
        <Input
          placeholder="eg: 200"
          type="text"
          style={{ width: 100, marginRight: 8 }}
          onChange={handleAmount}
          value={amount}
        />
        <Button>submit</Button>
      </form>
    </div>
  );
};

export default Form;
