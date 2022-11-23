import './App.css';
import { app } from './firebaseConfig'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';
function App() {
  let auth = getAuth();
  const [data, setData] = useState({});

  const handleInput = (event) => {
    let newInput = { [event.target.name]: event.target.value };
    setData({ ...data, ...newInput});
  };

  const handleSubmit = () => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
    .then((response) => {
      console.log(response.user)
    })
    .catch((err) => {
      alert(err.message)
    })
  };

  return (
    <div className="App-header">
    <input
      placeholder="Email"
      name="email"
      type="email"
      className="input-fields"
      onChange={event => handleInputs(event)}
    />
    <input
      placeholder="Password"
      name="password"
      type="password"
      className="input-fields"
      onChange={event => handleInputs(event)}
    />

    <button onClick={addData}>Log In</button>
    <button onClick={handlelogout}>Log out</button>
  </div>
  );
}

export default App;
