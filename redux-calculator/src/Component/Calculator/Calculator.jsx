import React, { useRef, useEffect, useState } from "react";
import "./calculator.css";
import { useDispatch } from "react-redux/es/exports";
import { btns, BTN_ACTIONS } from "./btnConfig";
import { addBtn } from "../../Redux/action";
export const Calculator = (props) => {
  const dispatch = useDispatch();
  console.log(props);
  const btnsRef = useRef(null);
  const expRef = useRef(null);
  useEffect(() => {
    const btns = Array.from(btnsRef.current.querySelectorAll("button"));
    btns.forEach((e) => (e.style.height = e.offsetWidth + "px"));
  }, []);
  // const ops = ["/", "x", "-", "+", "%", "+/-"];
  const btnClick = (item) => {
    console.log(item);
  };
  return (
    <div className="calculator">
      <div className="calculator__result">
        <div ref={expRef} className="calculator__result__exp">dtegefger</div>
        {/* <div className="calculator__result__exp res">jjjhgj</div> */}
      </div>
      <div ref={btnsRef} className="calculator__btns">
        {btns.map((item, index) => (
          <button
            key={index}
            className={item.class}
            onClick={() => dispatch(addBtn(item.display))}
          >
            {item.display}
          </button>
        ))}
      </div>
    </div>
  );
};
