import React, { useEffect, useState } from "react";
import Result from "../ResultPage/Result";
import "./Home.css";

let value1 = Math.floor(Math.random() * 10);
let value2 = Math.floor(Math.random() * 10);




const Home = () => {
    const [results, setResults] = useState([]);

    async function HandleResult(event) {
        // const [resultx, setResultx] = useState([]); 
        event.preventDefault();
        const exam = event.target.exam.value;
        const year = event.target.year.value;
        const board = event.target.board.value;
        const roll = event.target.roll.value;
        const reg = event.target.reg.value;
        const sum = event.target.sum.value;
        console.log(exam, year, board, roll, reg, sum);
        const result = {year, board, roll, reg};
    
        
        await fetch(`http://localhost:5000/search?${new URLSearchParams(result).toString()}`)
        .then(res => res.json())
        .then(data => setResults(data));
       
    }

  return (
    <div className="wrapper-div">
      <div className="main-div">
        <div className="inner-div">
          <div className="logo-div">
            <img src="bd_logo.png" alt="" />
          </div>
          <div className="banner-div">
            <div className="p-div">
              <p>Ministry of Education</p>
              <hr />
              <p className="title">Intermediate and Secondary Education Boards Bangladesh</p>
              {/* <hr /> */}
              <img src="banner_flag.jpg" alt="" />
            </div>
            <div className="result-archive">
                <hr />
                <p>Result Archive</p>
            </div>
          </div>
        </div>

        <div className="input-wrapper">
        <div className="input-area">
            <form onSubmit={HandleResult}>
                <label htmlFor="">Examination<span className="s1">:</span><select name="exam" id="">
                    <option value="HSC/Alim/Equivalent">HSC/Alim/Equivalent</option>
                </select></label> <br />
                <label htmlFor="">Year <span className="s2">:</span><select name="year" id="">
                    <option value="2022">2022</option>
                </select></label> <br />
                <label htmlFor="">Board <span className="s3">:</span> <select name="board" id="">
                    <option value="">Select One</option>
                    <option value="Barisal">Barisal</option>
                    <option value="Chittgong">Chittgong</option>
                    <option value="Comilla">Comilla</option>
                    <option value="Dhaka">Dhaka</option>
                    <option value="Mymensingh">Mymensingh</option>
                    <option value="Jessore">Jessore</option>
                    <option value="Rajshahi">Rajshahi</option>
                    <option value="Sylhet">Sylhet</option>
                    <option value="Madrasha">Madrasha</option>
                    <option value="Technical">Technical</option>
                </select></label> <br />
                <label htmlFor="">Roll<span className="s4">:</span> <input name="roll" className="input" type="text" /></label> <br />
                <label htmlFor="">Reg: No<span className="s5">:</span> <input name="reg" className="input" type="text" /></label> <br />
                <label htmlFor="">{value1}+{value2} <span className="s6">=</span> <input name="sum" className="input" type="text" /></label> <br />
                <div className="btn">
                <input className="btnReset" type="reset" value="Reset" />
                <input className="btnSubmit" type="submit" value="Submit" />
                </div>

            </form>
           
        </div>
       
        </div>

        {
                results.length>0 ? <Result allResults={results}/> : null
            }

        {/* footer */}
        <div className="footer">
            <div className="footer-div"></div>
            <div className="footer-content">
                <div className="footer-text">
                    <p>©2005-2018 Ministry of Education, All rights reserved.</p>
                    <div className="logo-area">
                        <p>Powered by</p>
                        <img src="tbl_logo.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
