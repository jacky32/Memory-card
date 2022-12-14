import "../styles/Card.css";
import cardback from "../cardback.png";

const Card = (props) => {
  const image = (i) => {
    if (i <= 9)
      return `https://art.hearthstonejson.com/v1/render/latest/enUS/256x/EX1_00${i}.png`;
    return `https://art.hearthstonejson.com/v1/render/latest/enUS/256x/EX1_0${i}.png`;
  };

  const imgDom = () => {
    return (
      <div className="Card-crop">
        <img
          src={image(props.number)}
          className="Card Card-rotatein"
          draggable="false"
          alt={"Image number " + props.number}
          onClick={(e) => props.handleClick(e)}
        />
        <img
          className="Card-cardback"
          src={cardback}
          onClick={(e) => props.handleClick(e)}
          draggable="false"
        />
      </div>
    );
  };

  return <div>{imgDom()}</div>;
};

export default Card;
