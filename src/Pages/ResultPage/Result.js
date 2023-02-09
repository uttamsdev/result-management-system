import React from "react";
import ResultData from "../ResultData/ResultData";
import "./Result.css";

// const results = [
//     {code: 101, sub: "ENG", grade: "A+"},
//     {code: 101, sub: "ENG", grade: "A+"},
//     {code: 101, sub: "ENG", grade: "A++"}
// ]

const results = [
  {
    result: [
      { code: "101", sub: "ENG", grade: "A+" },
      { code: "102", sub: "SOC", grade: "A+" },
    ],
    name: "Uttam Saha",
    age: 20
  },
];
console.log(results);
const Result = () => {
  return (
    <div>
      <div className="resulting-div">
        <div className="result-heading">
          <table border={1}>
            <tr>
              <th colSpan={4}>HSC/Alim/Equivalent Result 2022</th>
            </tr>
            <tr>
              <td>Roll No </td>
              <td>361917</td>
              <td>Name</td>
              <td>TAMANNA KHANAM</td>
            </tr>

            <tr>
              <td>Board</td>
              <td>DHAKA</td>
              <td>Father's Name</td>
              <td>ADEL FAKIR</td>
            </tr>

            <tr>
              <td>Group</td>
              <td>HUMANITIES</td>
              <td>Mother's Name</td>
              <td>MORJINA BEGUM</td>
            </tr>

            <tr>
              <td>Type</td>
              <td>REGULAR</td>
              <td>Date of Birth</td>
              <td>N/A</td>
            </tr>

            <tr>
              <td>Result </td>
              <td>PASSED</td>
              <td>Institute</td>
              <td>MUKSUDPUR COLLEGE</td>
            </tr>

            <tr>
              <td>GPA</td>
              <td colSpan={3}>5.00</td>
            </tr>
          </table>
        </div>
      </div>
      <h4 className="grade-text">Grade Sheet</h4>
      <table className="result-table" border={1}>
        <tr>
          <th>Code</th>
          <th>Subject</th>
          <th>Grade</th>
        </tr>

        {results[0]?.result?.map((result) => (
          <ResultData result={result}></ResultData>
        ))}
      </table>
    </div>
  );
};

export default Result;
