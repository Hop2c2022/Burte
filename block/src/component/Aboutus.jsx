

import { AboutusFace } from "./AboutusFace";

const Aboutus = ({ firstname, lastname,id,src ,gender}) => {
  return (
    <div className="dadada">
     <div>{gender}</div>
     <div className="firstname" >{firstname}</div>
     <div style={{paddingLeft:"20px"}}>{lastname}</div>
     <div className="namesss">
        <AboutusFace width={"50px"} height={"50px"} src={src} className="facee"/>
     </div>
    </div>
  );
};
export default Blog

