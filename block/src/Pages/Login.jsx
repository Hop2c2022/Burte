import '../login.css';
import React, { useState, useRef } from "react";
export const Login = () => {
  const a = useRef();
  const e = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [everything, setAll] = useState("");
  const namechanger = (e) => {
    setName(e.target.value);
  };
  const emailchanger = (e) => {
    setEmail(e.target.value);
  };
  const submit = (event) => {
    event.preventDefault();
    setAll([...everything, { name: name, email: email }]);
    a.current.value = "";
    e.current.value = "";
  };
  console.log(everything);
  return (
    <div id='container'>
    <div id='img'></div>
    <form onSubmit={submit} id="profilepage">
      <div></div>
      <div></div>
      <h2 id='hello'>Hello! Welcome.</h2>
      <div id='expl'>"Log in with your data that you entered during Your registration"</div>
      <div id='input'>
      <p1>Your Name: </p1> <input ref={a}  placeholder="Name"  onChange={namechanger} type="text" id='namein'
      />
      <p1>Your Email:</p1 > <input ref={e}  placeholder="Email"  onChange={emailchanger}  type="text" id="namein" 
      />
      <p1>Your Password: </p1> <input ref={a}  placeholder="Password"  onChange={namechanger} type="password" id='namein'
      />
      </div>
      <div id="button-divs">
        <button id="register" type="submit">Log in </button>
      </div>
    </form>
    </div>
  );
};