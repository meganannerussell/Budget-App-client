import React from "react";
/* eslint-disable react/prop-types */

export const Alert = ({ type, text }) => {
  return <div className={`alert alert-${type}`}>{text}</div>;
};
