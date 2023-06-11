import { useState } from "react";
import "./ItemsContainer.css";
import Item from "./Item";
const ItemsContainer = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="ItemsContainer">
        <Item />
        <Item />
        <Item />
      </div>
    </>
  );
};

export default ItemsContainer;
