import background from "./background.png";
import "./style.css";

function Card({ children }) {
  return (
    <div>
      <span>
        <img src={background} alt="Background de carta"></img>
        {children}
      </span>
    </div>
  );
}

export default Card;
