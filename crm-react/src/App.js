import './App.css';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const baseURL = "http://localhost:8080/oportunidades/login";


function App() {
  const [log, setLog] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (log === true) {
      navigate("/oportunidades");
    }
  }, [log])

  function HandleSubmit(event) {
    event.preventDefault() //Prevenimos cualquier comportamiento por defecto del evento


    const data = {
      username: event.target.uname.value,
      password: event.target.psw.value

    }

    axios.post(baseURL, data)
      .then((response) => {
        setLog(response.data.value);
      })

  }

  return (
    <div className="App">
      <div className="login">
        <form onSubmit={HandleSubmit}>
          <h1>Login</h1>
          <div className="formcontainer">
            <hr />
            <div className="container">
              <label for="uname"><strong>Username</strong></label>
              <input type="text" placeholder="Enter Username" name="uname" required />
              <label for="psw"><strong>Password</strong></label>
              <input type="password" placeholder="Enter Password" name="psw" required />
            </div>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
