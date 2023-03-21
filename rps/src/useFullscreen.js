import React, { useEffect, useState, useRef } from "react";
import "./styles.css";

const useFullscreen = (callback) => {
  const element = useRef();
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
      if (callback && typeof callback === "function") {
        callback(true);
      }
    }
  };
  const exitFull = () => {
    document.exitFullscreen();
    if (callback && typeof callback === "function") {
      callback(false);
    }
  };
  return { element, triggerFull, exitFull };
};

const App = () => {
  const onFullS = (isFull) => {
    console.log(isFull ? "We are full" : "We are small");
  };
  const { element, triggerFull, exitFull } = useFullscreen();

  return (
    <div className="App">
      <div ref={element}>
        <img src="https://thumbnail.10x10.co.kr/webimage/image/add1/513/A005138696_01.jpg?cmd=thumb&w=400&h=400&fit=true&ws=false" />
        <button onClick={exitFull}>Exit fullscreen</button>
        <button onClick={triggerFull}>Make fullscreen</button>
      </div>
    </div>
  );
};

export default App;
