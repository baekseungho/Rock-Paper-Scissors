import React, { useState } from "react";
import "./Rps.css";

function Result(props) {
  const res = props.my - props.com;
  let p = "";
  switch (res) {
    case -2:
      p = "win";
      break;
    case -1:
      p = "lose";
      break;
    case 0:
      p = "tie";
      break;
    case 1:
      p = "win";
      break;
    case 2:
      p = "lose";
      break;
  }
  console.log(res);
  console.log(p);
  return <div>{p}</div>;
}

function Rps() {
  let [mychoice, setMychoice] = useState(0);
  let [computer, setComputer] = useState(0);
  let [result, setResult] = useState(0);
  return (
    <div className="wrapper">
      <div className="vs">
        <div
          className="mychoice box"
          style={
            result == -2 || 1
              ? { borderColor: "yellowgreen" }
              : result == -1 || 2
              ? { borderColor: "red" }
              : { borderColor: "black" }
          }
        >
          <p>You</p>
          <img src={mychoice + ".png"} />
        </div>
        <div
          className="computer box"
          style={
            result == -2 || 1
              ? { borderColor: "red" }
              : result == -1 || 2
              ? { borderColor: "yellowgreen" }
              : { borderColor: "black" }
          }
        >
          <p>Computer</p>
          <img src={computer + ".png"} />
        </div>
      </div>
      <div className="footer">
        <i
          onClick={() => {
            setMychoice(1);
            setComputer(Math.floor(Math.random() * 3) + 1);
            setResult(mychoice - computer);
            console.log(
              "my:" + mychoice + "com:" + computer + "result:" + result
            );
          }}
          className="fa-solid fa-hand-back-fist"
        ></i>
        <i
          onClick={() => {
            setMychoice(2);
            setComputer(Math.floor(Math.random() * 3) + 1);
            setResult(mychoice - computer);

            console.log(
              "my:" + mychoice + "com:" + computer + "result:" + result
            );
          }}
          className="fa-solid fa-hand"
        ></i>
        <i
          onClick={() => {
            setMychoice(3);
            setComputer(Math.floor(Math.random() * 3) + 1);
            setResult(mychoice - computer);

            console.log(
              "my:" + mychoice + "com:" + computer + "result:" + result
            );
          }}
          className="fa-solid fa-hand-scissors"
        ></i>
      </div>
      <div className="result">
        <Result my={mychoice} com={computer} setResult={setResult} />
      </div>
      <div className="score">
        <div className="scoreBox">
          <div className="myscore"></div>
          <div className="comscore"></div>
        </div>
        <div class="odds"></div>
      </div>
    </div>
  );
}

export default Rps;
