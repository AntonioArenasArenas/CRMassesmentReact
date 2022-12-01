import './App.css';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const baseURL = "http://localhost:8080/oportunidades/login";

function handleSubmit(event) {
  event.preventDefault() //Prevenimos cualquier comportamiento por defecto del evento

  const data = {
    username: event.target.uname.value,
    password: event.target.psw.value

  }

  axios.post(baseURL, data)
    .then((response) => {
      console.log(response); //Comprobar si la respuesta es buena y si es buena usar navigate
    })

}


function App() {
  return (
    <div className="App">
      <div className="login">
        <form onSubmit={handleSubmit}>
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
      <BrowserRouter>
        <Routes>
          <Route>
          </Route>
          
        </Routes>
      </BrowserRouter>
    </div>
/*            path="/"
            element={<App />} */
  );
}

export default App;
