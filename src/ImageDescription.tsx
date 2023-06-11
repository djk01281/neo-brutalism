import { useState } from "react";
import "./ImageDescription.css";
const ImageDescription = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="ImageDescription">
        <div className="ImageDescriptionTitle">23.04. </div>
        <div className="ImageDesctiptionState">state: None Selected ❌</div>
      </div>
    </>
  );
};

export default ImageDescription;
