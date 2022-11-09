
import { Star } from "./Star";
import { Face } from "./Face";

const Cards = ({ name, src, word, arr }) => {
  return (
    <div className="first">
      <div>
        {arr.map((el) => (
          <Star width={"25px"} height={"25px"} />
        ))}

        <h1 className="wordsss" style={{ fontSize: "170%" }}>{word}</h1>
      </div>

      <div className="first_bottom">
        <Face width={"50px"} height={"50px"} src={src} />
        <h2>{name}</h2>
      </div>
    </div>
  );
};
export default Cards

