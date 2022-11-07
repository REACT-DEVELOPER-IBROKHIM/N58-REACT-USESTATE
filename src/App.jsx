// useState
// useEffect
// useRef
// react-router
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  // useEffect
  const [userData, setUserData] = useState([]);

  useEffect(() => {
      fetch("https://reqres.in/api/users")
        .then(response => response.json())
        .then(info => setUserData(info.data))
        .catch(error => console.log(error))
  }, [])

  console.log(userData)

  return (
    <div>
      {
        userData.map(user => 
          <div>
              <img src={user.avatar} alt="" />
              <h3>{user.first_name}</h3>
              <button>Delete</button>
          </div>  
        )
      }
    </div>
  );
}

export default App;
