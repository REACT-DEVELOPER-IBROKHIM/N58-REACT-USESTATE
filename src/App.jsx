// useState
// useEffect
// useRef
// react-router
import audio from './assets/alarm.mp3';
import { useState } from "react";

function App() {
  const alarm = new Audio(audio);
  const btnStyle = {
    padding: "10px 30px", 
    margin: "0 30px", 
    fontSize: "20px"
  }

  const [result, setResult] = useState(0); //react ni hook
  // set => o'rnatish
  console.log(result)
  function increment(){
    setResult(result + 1)
  }

  function decrement(){
    setResult(result - 1)
  }

  (() => {
      if(result % 33 === 0 && result > 0){
        alarm.play()
        setTimeout(() => {
          alarm.pause();
        }, 5000)
      }
    }
  )()

  return (
    <div style={{display: "flex"}}>
      <button onClick={decrement} style={btnStyle}>-</button>
      <h1>Count: { result }</h1>
      <button onClick={increment} style={btnStyle}>+</button>
    </div>
  );
}

export default App;
