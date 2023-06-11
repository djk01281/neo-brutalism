import { useState } from "react";
import "./Modal.css";
import ThumbnailContainer from "./ThumbnailContainer";
const Modal = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="Modal">
        <div className="ImageBox">
          <ThumbnailContainer />
          <ThumbnailContainer />
          <ThumbnailContainer />
          <ThumbnailContainer />
          <ThumbnailContainer />
          <ThumbnailContainer />
        </div>
        <div className="SelectBox">
          <button className="SelectButton">SELECT</button>
        </div>
      </div>
    </>
  );
};

export default Modal;
