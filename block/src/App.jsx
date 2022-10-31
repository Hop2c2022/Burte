
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
