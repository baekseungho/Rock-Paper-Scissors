import "./App.css";
import "./component/Rps.css";
import Rps from "./component/Rps";
import React from "react";
import Box from "./component/Box";
import { useState } from "react";

const choice = {
  rock: {
    name: "Rock",
    img: "https://thumb.photo-ac.com/47/473ef77f5797ec0fd8619c5236c85fba_t.jpeg",
  },
  paper: {
    name: "Paper",
    img: "https://korearps.kr/wp-content/uploads/sites/75/2020/03/slider-pic-102.png",
  },
  scissors: {
    name: "Scissors",
    img: "https://t1.daumcdn.net/tistoryfile/fs12/3_tistory_2009_01_12_07_49_496a778f3d93a?original",
  },
};

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");
  const [mcounter, setMcounter] = useState(0);
  const [ccounter, setCcounter] = useState(0);

  const play = (userChoice) => {
    console.log(userChoice, "선택됨!");
    setUserSelect(choice[userChoice]);

    // randomChoice()함수를 실행했을 때 결과값
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);

    // 1. 유저가 선택한 값
    // 2. 컴퓨터가 선택한 값
    // 두 값을 judgment함수에 매개변수로 보내준다.
    setResult(judgment(choice[userChoice], computerChoice));
    score(choice[userChoice], computerChoice);
  };

  const judgment = (user, computer) => {
    // 게임 로직에 대해서 생각 해보기.
    // 어떻게 user, computer 두 값을 비교할건지?
    // user.name == computer.name : tie
    // user.name == "rock", computer.name == "paper": user LOSE / computer WIN
    // user.name == "rock", computer.name == "scissors": user WIN / computer LOSE
    // user.name == "scissors", computer.name == "paper": user WIN / computer LOSE
    // user.name == "scissors", computer.name == "rock": user LOSE / computer WIN
    // user.name == "paper", computer.name == "rock": user WIN / computer LOSE
    // user.name == "paper", computer.name == "scissors": user LOSE / computer WIN
    if (user.name == computer.name) {
      return "TIE";
    } else if (user.name == "Rock")
      return computer.name == "Paper" ? "LOSE" : "WIN";
    else if (user.name == "Scissors")
      return computer.name == "Paper" ? "WIN" : "LOSE";
    else if (user.name == "Paper")
      return computer.name == "Rock" ? "WIN" : "LOSE";
  };

  const score = (user, computer) => {
    if (user.name == computer.name) {
    } else if (user.name == "Rock")
      computer.name == "Paper"
        ? setCcounter(ccounter + 1)
        : setMcounter(mcounter + 1);
    else if (user.name == "Scissors")
      computer.name == "Paper"
        ? setMcounter(mcounter + 1)
        : setCcounter(ccounter + 1);
    else if (user.name == "Paper")
      computer.name == "Rock"
        ? setMcounter(mcounter + 1)
        : setCcounter(ccounter + 1);
  };

  const randomChoice = () => {
    // 랜덤에서 우리가 가져올 수 있는 값은 숫자
    // 이 값을 데이터랑 어떻게 연결시킬지 고민
    // 배열의 인덱스 번호를 랜덤으로 선택되게 구현

    // 객체에서 인덱스를 번호를 사용하려면 Array로 만들어야 한다.
    // 객체의 key값을 뽑아서 Array로 만들어주는 함수 Object.keys()
    let itemArray = Object.keys(choice);

    // 0부터 1사이에 있는 랜덤한 값을 반환한다.
    // Math.floor 소수점 아래를 버리는 함수
    let randomItem = Math.floor(Math.random() * itemArray.length);

    let final = itemArray[randomItem];
    return choice[final];
  };
  return (
    <div className="App">
      <div className="box-list">
        <div className="vs">
          <Box title="You" item={userSelect} result={result} />
          <Box title="Computer" item={computerSelect} result={result} />
        </div>
      </div>

      {/* play함수한테 매개변수로 값을 전달한다
            리액트에서는 play() UI를 그려줄 때 해당 함수를 실행 시킨다.
            onClick시 실행되게 하고 싶다면 콜백함수 형태로 전달해줘야 한다.
        */}

      <div className="footer">
        <i
          onClick={() => play("rock")}
          className="fa-solid fa-hand-back-fist"
        ></i>
        <i onClick={() => play("paper")} className="fa-solid fa-hand"></i>
        <i
          onClick={() => play("scissors")}
          className="fa-solid fa-hand-scissors"
        ></i>
      </div>

      <div className="score">
        <div className="scoreBox">
          <div className="myscore">My score: {mcounter}</div>
          <div className="comscore">Computer score: {ccounter}</div>
        </div>
        <div className="odds">
          승률: {((mcounter / (mcounter + ccounter)) * 100).toFixed(2)}%
        </div>
      </div>
    </div>
  );
}

export default App;
