import { useState } from "react";

const ThumbnailContainer = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="ThumbnailContainer">
        <img
          className="Thumbnail"
          src="https://blog.kakaocdn.net/dn/xuZQj/btrOlLgmXhB/X6MppvJqBHvKYk3G6A5XI0/img.jpg"
        ></img>
      </div>
    </>
  );
};

export default ThumbnailContainer;
