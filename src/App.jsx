// useState
// useEffect
// useRef
// react-router
import "./App.css";
import { useState } from "react";

function App() {
  const [isBoxVisible, setIsBoxVisible] = useState(false);
  
  function show(){
    setIsBoxVisible(!isBoxVisible)
    // setIsBoxVisible(true);
    // if(isBoxVisible === true){
    //   setIsBoxVisible(false)
    // }
    // else{
    //   setIsBoxVisible(true)
    // }
  }

  // function hide(){
  //   setIsBoxVisible(false)
  // }


  return (
    <div>
      <div 
      style={ isBoxVisible === true ? {display: "block"} : {display: "none"} } 
      className="box">
        {/* <button onClick={hide}>Close</button> */}
      </div>
      <button onClick={show}>Show</button> 
    </div>
  );
}

export default App;
