import React from "react";
import ResultData from "../ResultData/ResultData";
import "./Result.css";



// const results = [
//   {
//     result: [
//       { code: "101", sub: "ENG", grade: "A+" },
//       { code: "102", sub: "SOC", grade: "A+" },
//     ],
//     name: "Uttam Saha",
//     age: 20
//   },
// ];
// console.log(results);
const Result = ({allResults}) => {
  const {results, reg, roll, name, board, father, group, mother, type, dateOfBirth, result, institute, gpa} = allResults[0];
  // console.log(roll, name, board, father, mother);

  const handlePrint = () => {
    window.print();
  }
  return (
    <div id="result">
      <div className="resulting-div">
        <div className="result-heading">
          <table className="table1" border={1}>
            <tr>
              <th className="table-heading" colSpan={4}>HSC/Alim/Equivalent Result 2022</th>
            </tr>
            <tr>
              <td>Roll No </td>
              <td>{roll}</td>
              <td>Name</td>
              <td>{name}</td>
            </tr>

            <tr>
              <td>Board</td>
              <td>{board}</td>
              <td>Father's Name</td>
              <td>{father}</td>
            </tr>

            <tr>
              <td>Group</td>
              <td>{group}</td>
              <td>Mother's Name</td>
              <td>{mother}</td>
            </tr>

            <tr>
              <td>Type</td>
              <td>{type}</td>
              <td>Date of Birth</td>
              <td>{dateOfBirth}</td>
            </tr>

            <tr>
              <td>Result </td>
              <td className="result-text">{result}</td>
              <td>Institute</td>
              <td>{institute}</td>
            </tr>

            <tr>
              <td>GPA</td>
              <td className="gpa" colSpan={3}>{gpa}</td>
            </tr>
          </table>
        </div>
      </div>
      <h4 className="grade-text">Grade Sheet</h4>
      <table  className="result-table" border={1}>
        <tr className="table2h">
          <th>Code</th>
          <th>Subject</th>
          <th>Grade</th>
        </tr>

        {results?.map((result) => (
          <ResultData result={result}></ResultData>
        ))}
      </table>
      <button onClick={handlePrint} className="printBtn">PRINT</button>
    </div>
  );
};

export default Result;
