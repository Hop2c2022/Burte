
import { Link } from "react-router-dom"
import {Login} from "./Login"


export const Home = () => {
    return(
        <div className="Home">
    <div id='container'>
      <div id='head'>
        <div id='teams'>team<p1 id="dot">■</p1> </div>
        <div id='href'>
          <div id='product' ><Link to="/product">Product</Link></div>
          <div id='servers'><Link to="/service">Service</Link></div>
          <div id='contact'><Link to="/contact">Contact</Link></div>
          <div id='login'><Link to="/login">Login</Link></div>
          <button id='getacc'><Link to="/getaccess">Get Access</Link></button>
      </div>
      </div>
      <div id='bottom'>
        <div id='h1'>Instant collaborations for remote teams</div>
        <div id='new'>All in one for your remote team chats, collaborations and track projects</div>
        <div id='log'>
          <input type="text"placeholder='Email' id='text'/>
          <button id='buttongetacc'>Get early access</button>
        </div>
      </div>

    </div>
    </div>
    )
}