import { useState } from "react";
import "./ImageContainer.css";
import rightArrow from "./assets/svgs/rightArrow.svg";
const ImageContainer = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="ImageContainer">
        <img
          className="imageResult"
          src="https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/7PNP/image/-ydxSWYGHnSZgvtLNlEHRxRigTI.jpg"
        ></img>
        {/* <img className="rightArrow" src={rightArrow} /> */}
      </div>
    </>
  );
};

export default ImageContainer;
