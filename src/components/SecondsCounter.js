import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import "./SecondsCounter.css";
export const SecondsCounter = (props) => {
  let uno = Math.floor(props.seconds/1) % 10;
  let dos = Math.floor(props.seconds/10) % 10;
  let tres = Math.floor(props.seconds/100) % 10;
  let cuatro = Math.floor(props.seconds/1000) % 10;
  let cinco = Math.floor(props.seconds/10000) % 10;
  let seis = Math.floor(props.seconds/100000) % 10;

  return (
    <div className="container text-bg-dark">
      <span>
        <FontAwesomeIcon icon={faClock} />
      </span>
      <div>{seis}</div>
      <div>{cinco}</div>
      <div>{cuatro}</div>
      <div>{tres}</div>
      <div>{dos}</div>
      <div>{uno}</div>
    </div>
  );
};
