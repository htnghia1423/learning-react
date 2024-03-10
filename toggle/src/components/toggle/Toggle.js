import React, { useState } from "react";
import "./ToggleStyle.css";

// Stateless functional component: component nhưng không sử dụng state
// function Toggle() {
//   return <div className="toggle"></div>;
// }

// // Stateful functioal component: component có sử dụng state
// function Toggle2() {
//   // const [count, setCount] = useState();
//   return <div className="toggle"></div>;
// }

function Toggle() {
  // 1. enabling state: useState(initialize value)
  // 2. initialize state: useState(false)
  // 3. reading state:
  // 4. updating state
  //   const array = useState(false);
  //   console.log(array); // [false, function]
  //   console.log(array[0]);
  //   console.log(array[1]);
  // initialize value: boolean(true, false), number(1, 2, 3, 4, ...), String("thunder"), undefined, null, [1,2,3,4], {title: "lmao"}
  const [on, setOn] = useState(false);
  // console.log(on);
  // console.log(on, setOn);
  // [title, setTitle]
  // [isActive, setIsActive]
  // <div className="toggle" onclick="toggle"></div>; onClick
  // state changes -> re-render
  const handleToggle = () => {
    // console.log("Clicked");
    // setOn(callback) -> setOn(prevState => !prevState)
    setOn((on) => !on);
  };
  return (
    <div>
      <div className={`toggle ${on ? "active" : ""}`} onClick={handleToggle}>
        <div className={`spinner ${on ? "active" : ""}`}></div>
      </div>
      {/* <div className="toggle-controll">
        <div className="toggle-on" onClick={() => setOn(true)}>
          On
        </div>
        <div className="toggle-off" onClick={() => setOn(false)}>
          Off
        </div>
      </div> */}
    </div>
  );
}

export default Toggle;
