
import {Arr} from "./Arr"
import { Face } from "./Face";

const Blog = ({ name,  word, arr,text,src ,date}) => {
  return (
    <div className="firsts">
     <Arr width={"380px"} height={"170px"} src={arr} />
     <div className="wordbord" style={{paddingLeft:"20px"}}>{word}</div>
     <div style={{paddingLeft:"20px"}}>{text}</div>
     <div className="namesss">
        <Face width={"50px"} height={"50px"} src={src} className="facee"/>
        <div>{name}</div>
        <div>{date}</div>
     </div>
    </div>
  );
};
export default Blog

