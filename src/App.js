import React, { Component, useState } from "react";
import "./App.css";

function App() {
  const [long, SetLong] = useState(0);
  const valueChangedHandler = (event) => {
    let lengthValue = event.target.value.length;
    SetLong(lengthValue);
  };

  return (
    <div className="container">
      <textarea rows="3" onChange={valueChangedHandler}></textarea>
      <div className="counter">{long}</div>
    </div>
  );
}

// class App extends Component {
//   render() {
//     return (
//       <div className="container">
//         <textarea rows="3"></textarea>
//         <div className="counter">0</div>
//       </div>
//     );
//   }
// }

export default App;
