import { useState } from "react";
import ImageContainer from "./ImageContainer";
import "./Item.css";
import ImageDescription from "./ImageDescription";
import Modal from "./Modal";
const Item = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="Item">
        <ImageContainer />
        <ImageDescription />
        <Modal />
        <button className="ImageSelectButton">SELECT</button>
      </div>
    </>
  );
};

export default Item;
