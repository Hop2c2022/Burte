
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import{Home} from "./Pages/Home"
import{Product} from "./Pages/Product"
import{Service} from "./Pages/Service"
import{Contact} from "./Pages/Contact"
import{Login} from "./Pages/Login"
import{Getaccess} from "./Pages/Getaccess"
// import {Profiles} from "./Pages/Profiles"
const App=()=> {
  return (
    <div className="App">
          <BrowserRouter>
            <Routes>
               <Route path="/" element={<Home/>} />
               <Route path="/product" element={<Product/>} />
               <Route path="/service" element={<Service/>} />
               <Route path="/contact" element={<Contact/>} />
               <Route path="/login" element={ <Login/>} />
               <Route path="/getaccess" element={<Getaccess/>} />
          </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;




















// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

// const App=()=> {
//   return (
//     // <Container fluid>

//     // </Container>















// export default App;


// import Container from 'react-bootstrap/Container';

// const App=()=> {
//   return (
//     <div id='container'>
//       <div id='upper'></div>
//       <div id='middle'></div>
//       <div id='bottom'></div>
//     </div>
//   );
// }

// export default App;





// time

// import { useState, useEffect } from "react";
// import ReactDOM from "react-dom/client";

// const App=()=> {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     setTimeout(() => {
//       setCount((count) => count + 1);
//     }, 1000);
//   });

//   return (
//   <div>
//     <h1>{count}</h1>
//     <button onClick={() => setCount(count ==0)}>Reset</button>
//     <button onClick={() => setCount(count)}>Stop</button>
//     <button onClick={() => setCount()}>Start</button>
//   </div>
//   )
  

// }

// export default App;

              