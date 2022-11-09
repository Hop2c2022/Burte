
import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import  "../product.css"
import Blob from "../component/Blob";
import Arr1 from "../photos/Arr1.png"
import Arr2 from "../photos/Arr2.png"
import Arr3 from "../photos/Arr3.png"
import face1 from "../photos/face1.png"
import face2 from "../photos/face2.png"
import faceicon3 from "../photos/faceicon3.png"
import Form from 'react-bootstrap/Form';

export const Product = () => {
    return(
        <div className="containerOfPrroduct">
            <div className='header'>
                <h1 className='team.'style={{color:"black"}}>team.</h1>
                <div className='href'>
                    <div id='product' ><Link to="/product">Product</Link></div>
                    <div id='servers'><Link to="/service">Service</Link></div>
                    <div id='contact'style={{color:"grey"}} ><Link to="/contact">Contact</Link></div>
                    <div id='login' style={{color:"white"}}><Link to="/login">Login</Link></div>
                    <Button variant="outline-secondary"><Link to="/getaccess">Get Access</Link></Button>{' '}
                </div>
            </div>
            <div className="blogpost">
                <div className="blog">Blog posts </div>
                <div className="blogs-text">Our latest updates and blogs about managing your team</div>
            </div>
            <div className="cardsss">
                <div className="upper">
                    <Blob src={face1} src1={Arr1} name={"Wade Warren"} date={"2nd january,2022"} word={"The Emotional Toll of being in UX"} text={"There are times when our work impacts us deeply-- sometimes in ways we neither acknowlege nor understand"}/>
                    <Blob src={face2} arr={Arr2} name={"Wade Warren"} date={"2nd january,2022"} word={"The Emotional Toll of being in UX"} text={"There are times when our work impacts us deeply-- sometimes in ways we neither acknowlege nor understand"}/>
                    <Blob src={faceicon3} arr={Arr3} name={"Wade Warren"} date={"2nd january,2022"} word={"The Emotional Toll of being in UX"} text={"There are times when our work impacts us deeply-- sometimes in ways we neither acknowlege nor understand"}/>
                </div>
                <div className="middle">
                <Blob src={face1} src1={Arr1} name={"Wade Warren"} date={"2nd january,2022"} word={"The Emotional Toll of being in UX"} text={"There are times when our work impacts us deeply-- sometimes in ways we neither acknowlege nor understand"}/>
                    <Blob src={face2} arr={Arr2} name={"Wade Warren"} date={"2nd january,2022"} word={"The Emotional Toll of being in UX"} text={"There are times when our work impacts us deeply-- sometimes in ways we neither acknowlege nor understand"}/>
                    <Blob src={faceicon3} arr={Arr3} name={"Wade Warren"} date={"2nd january,2022"} word={"The Emotional Toll of being in UX"} text={"There are times when our work impacts us deeply-- sometimes in ways we neither acknowlege nor understand"}/>
                </div>
                <div className="bottomsssss">
                <Blob src={face1} src1={Arr1} name={"Wade Warren"} date={"2nd january,2022"} word={"The Emotional Toll of being in UX"} text={"There are times when our work impacts us deeply-- sometimes in ways we neither acknowlege nor understand"}/>
                    <Blob src={face2} arr={Arr2} name={"Wade Warren"} date={"2nd january,2022"} word={"The Emotional Toll of being in UX"} text={"There are times when our work impacts us deeply-- sometimes in ways we neither acknowlege nor understand"}/>
                    <Blob src={faceicon3} arr={Arr3} name={"Wade Warren"} date={"2nd january,2022"} word={"The Emotional Toll of being in UX"} text={"There are times when our work impacts us deeply-- sometimes in ways we neither acknowlege nor understand"}/>
                </div>
            </div>
            <Button variant="info" style={{color:"white"}} id="next">Next</Button>{' '}
            <div className='bottoms'>
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
