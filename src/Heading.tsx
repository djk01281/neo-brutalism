import { useState } from "react";

const Heading = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="Heading">Image Search</div>
    </>
  );
};

export default Heading;
