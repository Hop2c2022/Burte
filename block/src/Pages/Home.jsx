import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Cards from "../component/Cards";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import faceicon1 from "../photos/faceicon1.png"
import faceicon2 from "../photos/faceicon2.png"
import faceicon3 from "../photos/faceicon3.png"
import faceicon4 from "../photos/faceicon4.png"

// export const Home = () => {
//   return(
// <div className='container'>
// <div className='header'>
//   <h1 className='team.'style={{color:"white"}}>team.</h1>
//   <div className='href'>
//     <div id='product' ><Link to="/product">Product</Link></div>
//     <div id='servers'><Link to="/service">Service</Link></div>
//     <div id='contact'style={{color:"white"}} ><Link to="/contact">Contact</Link></div>
//     <div id='login' style={{color:"white"}}><Link to="/login">Login</Link></div>
//     <Button variant="outline-secondary"><Link to="/getaccess">Get Access</Link></Button>{' '}
//   </div>
// </div>
// <div className='coffee-woman'>
// <h1 classname="h1" style={{color:"white"}}>Instant collaborations for remote teams</h1>
//   <div className='text' style={{color:"white"}}>All in one for your remote team chats collaboration and track projects</div>
//   <div className='buttons'>
//     <Form.Control style={{width:"310px"}} placeholder="Email" aria-label="Text input with checkbox" />
//     <Button variant="info" style={{color:"white"}}>Get early access</Button>{' '}
//   </div>
// </div>
// <div className='mid-side'>
//   <div className='first'>
//     <div className='text-one'>
//       <div className='header-one'>Your Hub for teamwork</div>
//       <div className='words-one'>Give everyone you work with--inside and outside your company--a more productive way to stay in sync. Respond faster with emoji, keep conversation focused in channels, and simply all your communication into one place</div>
//       <div className='learnmore'>Learn more</div>
//     </div>
//     <div className='picture-one'></div>
//   </div>
//   <div className='second'>
//     <div className='picture-second'></div>
//     <div className='text-second'>
//       <div className='header-one'></div>
//       <div className='words-one'></div>
//       <div className='lernmore'></div>
//     </div>
//   </div>
//   <div className='third'>
//     <div className='text-third'>
//       <div className='header-one'></div>
//       <div className='words-one'></div>
//       <div className='lernmore'></div>
//     </div>
//     <div className='picture-third'></div>
//   </div>
// </div>
// <div className='cards'></div>
// <div className='bottom'></div>

// </div> 

//   )}






import {Star} from "../component/Star"
export const Home = () => {
  const starl=[1,2,3,4]
    return(
    <div className="Home">
      <div id='container'>
          <div id='head'>
            
              <div id='teams'>team<p1 id='dot'>■</p1></div>
            
          <div id='href' >
            <div id='product' ><Link to="/product">Product</Link></div>
            <div id='servers'><Link to="/service">Service</Link></div>
            <div id='contact'><Link to="/contact">Contact</Link></div>
            <div id='login'><Link to="/login">Login</Link></div>
            <button id='getacc'><Link to="/getaccess">Get Access</Link></button>
          </div>
      <div id='bottom'>
        <div id='h1'>Instant collaborations for remote teams</div>
        <div id='new'>All in one for your remote team chats, collaborations and track projects</div>
        <div id='log'>
          <Form.Control style={{width:"310px"}} placeholder="Email" aria-label="Text input with checkbox" id="text"/>
          <Button variant="info" style={{color:"white"}} id="buttongetacc">Get early access</Button>{' '}
        </div>
      </div>
       </div >
     </div>
     <div className='mid-side'>
   <div className='firstss'>
     <div className='text-one'>
       <div className='header-one'>Your Hub for teamwork</div>
       <div className='words-one'>Give everyone you work with--inside and outside your company--a more productive way to stay in sync. Respond faster with emoji, keep conversation focused in channels, and simply all your communication into one place</div>
       <div className='learnmore'>Learn more→</div>
     </div>
     <div className='picture-one'></div>
   </div>
   <div className='second'>
     <div className='picture-second'></div>
     <div className='text-second'>
       <div className='header-one'>Simple task management</div>
       <div className='words-one'>Give everyone you work with--inside and outside your company--a more productive way to stay in sync. Respond faster with emoji, keep conversation focused in channels, and simply all your communication into one place</div>
       <div className='learnmore'>Learn more→</div>
     </div>
   </div>
   <div className='third'>
     <div className='text-third'>
       <div className='header-one'>Scheduling that actually works</div>
       <div className='words-one'>Give everyone you work with--inside and outside your company--a more productive way to stay in sync. Respond faster with emoji, keep conversation focused in channels, and simply all your communication into one place</div>
       <div className='learnmore'>Learn more→</div>
     </div>
     <div className='picture-third'></div>
   </div>
 </div>
 <div className='whatpsau' >What people say about us</div>
 <div className='cards'>
  <Cards className="card" src={faceicon1} name={"Amy Klassen"} arr={starl} word={'Give everyone your work with-- inside and outside your emoji, keep conversations focused in channels, and simply all your communication into one place'} />
  <Cards className="card" src={faceicon2} name={"Jane Cooper"} arr={starl} word={'Amet minim molit non deserunt ullamco est sit aliqua dolor do amit sint. Velit afficia consequat duis enit veclit mollit. Exercitation veniam consequat sunt nostrud amet.'} />
  <Cards className="card" src={faceicon3} name={"Eleanor Pena"} arr={starl} word={'Give everyone your work with-- inside and outside your emoji, keep conversations focused in channels, and simply all your communication into one place'} />
  <Cards className="card" src={faceicon4} name={"Erza Scarlet"} arr={starl} word={'Amet minim molit non deserunt ullamco est sit aliqua dolor do amit sint. Velit afficia consequat duis enit veclit mollit. Exercitation veniam consequat sunt nostrud amet.'} />
 </div>
      <div className='bottom'>
        <div className='rights'>
          <div style={{color:"white"}} className='teams'>teams.</div>
          <div className='contact'>
            <div style={{color:"white"}} className='insta' >Instagram</div>
            <div style={{color:"white"}} className='facebook'> Facebook</div>
            <div style={{color:"white"}} className='twitter'>twitter</div>
            <div style={{color:"white"}} className='insta'>Instagram</div>
            <div style={{color:"white"}} className='facebook'> Facebook</div>
            <div style={{color:"white"}} className='twitter'>twitter</div>
          </div>
        </div>
        <div className='middles'>
          <div className='Use-coses'>
            <div style={{color:"white"}} className='uppersss'>UseCases</div>
            <div className='botommm'>
              <div style={{color:"white"}} className='UIdes'>UI Design</div>
              <div style={{color:"white"}} className='UXdes'>UX Design</div>
              <div style={{color:"white"}} className='proto'>Prototyping</div>
              <div style={{color:"white"}} className='UIdes'>UI Design</div>
              <div style={{color:"white"}} className='UXdes'>UX Design</div>
              <div style={{color:"white"}} className='proto'>Prototyping</div>
            </div>
          </div>
          <div className='Explope'>
            <div style={{color:"white"}} className='uppersss'>Explore</div>
            <div className='botommm'>
              <div style={{color:"white"}} className='figma'>Figma</div>
              <div style={{color:"white"}} className='custumers'>Custumers</div>
              <div style={{color:"white"}} className='Why i love'> Why i love Figma</div>
              <div style={{color:"white"}} className='figma'>Figma</div>
              <div style={{color:"white"}} className='custumers'>Custumers</div>
              <div style={{color:"white"}} className='Why i love'> Why i love Figma</div>
            </div>
          </div>
          <div className='resources'>
            <div style={{color:"white"}} className='uppersss'>Resources</div>
            <div className='botommm'>
              <div style={{color:"white"}}>Community Resources Hub</div>
              <div style={{color:"white"}}>Support</div>
              <div style={{color:"white"}}>Education</div>
              <div style={{color:"white"}}>Community Resources Hub</div>
              <div style={{color:"white"}}>Support</div>
              <div style={{color:"white"}}>Education</div>
            </div>
          </div>
        </div>
        <div className='lefts'>
          <div style={{color:"white"}}>Subscribe for our newsletter </div>
          <Form.Control style={{width:"310px"}} placeholder="Email" aria-label="Text input with checkbox" id="text"/>
        </div>
      </div>
     </div>
    )
}