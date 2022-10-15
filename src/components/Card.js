import "../styles/Card.css";
import { useEffect, useState } from "react";

const Card = (props) => {
  const [clicks, setClicks] = useState(0);

  // useEffect(() => {
  //   const addOne = () => setClicks(clicks + 1);

  //   document.addEventListener("click", addOne);
  // }, [clicks]);

  const handleClick = (e) => {
    setClicks(clicks + 1);
  };

  const image = (i) => {
    if (i <= 9)
      return `https://art.hearthstonejson.com/v1/render/latest/enUS/256x/EX1_00${i}.png`;
    return `https://art.hearthstonejson.com/v1/render/latest/enUS/256x/EX1_0${i}.png`;
  };

  const imgDom = () => {
    return (
      <div className="Card-crop" onClick={(e) => handleClick(e)}>
        <img
          src={image(props.number)}
          className="Card"
          draggable="false"
          alt={"Image number" + props.number}
        />
        <div>
          <div>You clicked {clicks} times</div>
        </div>
      </div>
    );
  };

  return <div>{imgDom()}</div>;
};

export default Card;
