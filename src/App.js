import "./App.css";
import { useState } from "react";
const mathjs = require('mathjs');

function App() {
  const [digit, setDigit]= useState("");
  return (
    <>
      <div className="main_container">
        <div className="display_container">
          {digit}
        </div>
        <div className="flex_container">
              <div className="flex_item" onClick={()=>setDigit("")}>R</div>
              <div className="flex_item" onClick={()=>setDigit(digit+"%")}>%</div>
              <div className="flex_item" onClick={()=>setDigit(digit.slice(0,digit.length-1))}>CE</div>
              <div className="flex_item" onClick={()=>setDigit(digit+"/")}>÷</div>
              <div className="flex_item" onClick={()=>setDigit(digit+"7")}>7</div>
              <div className="flex_item" onClick={()=>setDigit(digit+"8")}>8</div>
              <div className="flex_item" onClick={()=>setDigit(digit+"9")}>9</div>
              <div className="flex_item" onClick={()=>setDigit(digit+"*")}>x</div>
              <div className="flex_item" onClick={()=>setDigit(digit+"4")}>4</div>
              <div className="flex_item" onClick={()=>setDigit(digit+"5")}>5</div>
              <div className="flex_item" onClick={()=>setDigit(digit+"6")}>6</div>
              <div className="flex_item" onClick={()=>setDigit(digit+"-")}>-</div>
              <div className="flex_item" onClick={()=>setDigit(digit+"1")}>1</div>
              <div className="flex_item" onClick={()=>setDigit(digit+"2")}>2</div>
              <div className="flex_item" onClick={()=>setDigit(digit+"3")}>3</div>
              <div className="flex_item" onClick={()=>setDigit(digit+"+")}>+</div>
              <div className="flex_item" onClick={()=>setDigit(digit+"00")}>00</div>
              <div className="flex_item" onClick={()=>setDigit(digit+"0")}>0</div>
              <div className="flex_item" onClick={()=>setDigit(digit+".")}>.</div>
              <div className="flex_item" onClick={()=>setDigit(mathjs.evaluate(digit))}>=</div>
        </div>
      </div>
    </>
  );
}

export default App;
