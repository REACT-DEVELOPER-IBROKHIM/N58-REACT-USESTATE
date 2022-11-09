// useState
// useEffect
// useRef
// react-router
import { useState } from "react";
import "./App.css";

function App() {
  const [progressPrecent, setProgressPrecent] = useState(0)

  const fillProgress = () => {
    if(progressPrecent < 100){
      setProgressPrecent(progressPrecent + 25)
    }
  }

  const unfillProgress = () => {
    if(progressPrecent > 0){
      setProgressPrecent(progressPrecent - 25)
    }
  }
  return (
    <div>
      <div className="progress">
        <div className="milestone-wrapper">
          {
            new Array(5).fill("*").map((item, ind) => 
              <div className="milestone" onClick={() => { setProgressPrecent(ind * 25) }}>{ind + 1}</div>
            )
          }
        </div>
        <div className="fill" style={{width: `${progressPrecent}%`}}></div>
      </div>
      <div className="progress-controller">
        <button onClick={unfillProgress}>BACK</button>
        <button onClick={fillProgress}>NEXT</button>
      </div>
    </div>
  );
}

export default App;
