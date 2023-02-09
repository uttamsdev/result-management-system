import React from "react";

const ResultData = (props) => {
    // console.log(props);
    const {code, sub, grade} = props.result;
  return (
    <tr>
      <td>{code}</td>
      <td>{sub}</td>
      <td>{grade}</td>
    </tr>
  );
};

export default ResultData;
