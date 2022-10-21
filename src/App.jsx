
//greating....


// function App() {
//   return (
//     <div className="App">
//       {/* <Greeting props ={{ name:"bonte" }} /> */}
//       <Head name="ToDoList" />
//       {/* <List name='add'/> */}
//       <Button Button="Add"/>
//     </div>
//   );
// }

// export default App;








//TodoList....


import './App.css';
import  Head from "./component/Head";
import React, { useState } from 'react';
import { Input } from "./component/Input"
import { Button } from './component/Button';
import { Todo } from './component/Todo'

const App = () => {
  const [ search, setSearch ] = useState("");
  const [ input, setInput ] = useState("");
  const [todo, setTodo] = useState([]);
  const [fTodo, setFTodo] = useState([])
  const deleteTodo=(id) =>{
    setTodo(todo.filter ((el, index) => id !==index))
  }


  const searchf=(look) =>{
    setFTodo(todo.filter((el) => el.text.includes(look))) 
    console.log(fTodo);
  }
  return (
    <div className="App">
      <div style={{ display: "flex", width: "100%", justifyContent: "center", alignItems: "center" }}>
        <Head name="ToDoList" />
        <Input setInput={setInput} input={input} />
        <Button input={input} todo={todo} setTodo={setTodo} setInput = {setInput}/>
        <input style={{ width: "20vw", height: "3vh" }} onChange={(e)=>searchf(e.target.value)}/>
        <div></div>

      </div>
      <Todo todo={todo} deleteTodo={deleteTodo} />
       
    </div>
  );
}
export default App;

















//login useRef,,,,



// import './App.css';
// import  Head from "./component/Head";
// import React , { useRef, useState } from 'react';
//  const App = () => {
//     const inputRef = useRef('');
//     const inputRef2 = useRef('');
  
//     console.log(inputRef)
   
//   const handlesubmit =  (event)=>{
//     event.preventDefault();
//     inputRef.current.focus();
//     inputRef2.current.focus();
//     console.log("Name-",inputRef.current.value,"Email-", inputRef2.current.value)
//   }
//     return (
//       <div className="App" >
//         <form onSubmit={handlesubmit}>
//         <label>
//         Name:
//         <input ref={inputRef}  type="text" name="name" />
//         </label>
//         <label>
//         Email:
//         <input ref={inputRef2} type="text" name="name"   />
//         </label>
//         <input   type="submit" value="submit" />
//         <button  type="submit" value="email" >Name</button>
//         <button  type="submit" value="name">Email</button>
      
//       </form>
      
//       </div>
//     );
//   }
//   export default App;














//Teachers recommend



// import './App.css';
// import React , { useRef, useState } from 'react';
// import {StarIcon} from "./component/star";
// import img from './photos/Rectangle.png'
// import icon from './photos/Ellipse.png'


//  const App = () => {
//     return (
//       <div id='App'>
//         <div id='container'>
//           <div id='first'>
//             <div id='star'>  {[1,2,3,4,5,].map(el=> <StarIcon width={"18px"} height={"18px"}/>)} </div>
//             <div id='sentence'>Give everyone you work with--inside and outside your emoji, keep conversations focused in channels, and simply all your communication into one place</div>
//             <div id='person'>
//               <img id='photo' src={icon} alt="" />
//               <div id='name'>Amy Klassen</div>
//             </div>
//           </div>
//           <div id='second'>
//             <img id='photo2' src={img} alt="" />
//             <div id='down'>
//               <div id='h1'>Data-Driven design is Killing Our instincts</div>
//               <div id='text'>Our latest updates abd blogs about managing your team Our lates uptates and blogs about managing your team</div>
//               <div id='person2'>
//                 <img id='photo3'src={icon} alt="" />
//                 <div id='res'>
//                   <div id='name2'>Jane Cooper       |</div>
//                   <div id='date'>2nd January,2022</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
       
//       </div>

//     );
//   }
//   export default App;