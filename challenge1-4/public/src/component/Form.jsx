
import './App.css';
import  Head from "./component/Head";
import React , { useRef, useState } from 'react';
 const App = () => {
    const inputRef = useRef('');
    const inputRef2 = useRef('');
  
    console.log(inputRef)
   
  const handlesubmit =  (event)=>{
    event.preventDefault();
    inputRef.current.focus();
    inputRef2.current.focus();
    console.log("Name-",inputRef.current.value,"Email-", inputRef2.current.value)
  }
    return (
      <div className="App" >
        <form onSubmit={handlesubmit}>
        <label>
        Name:
        <input ref={inputRef}  type="text" name="name" />
        </label>
        <label>
        Email:
        <input ref={inputRef2} type="text" name="name"   />
        </label>
        <input   type="submit" value="submit" />
        <button  type="submit" value="email" >Name</button>
        <button  type="submit" value="name">Email</button>
      
      </form>
      
      </div>
    );
  }
  export default App;