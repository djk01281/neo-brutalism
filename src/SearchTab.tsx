import { useState } from "react";
import SearchBar from "./SearchBar";
import "./SearchTab.css";
const SearchTab = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="SearchTab">
        <div className="SearchTitle">Search For Images</div>
        <div className="SearchDescription">
          It will return images that has been posted during the{" "}
          <span className="highlight-yellow">past year.</span>
        </div>
        <SearchBar />
      </div>
    </>
  );
};

export default SearchTab;
