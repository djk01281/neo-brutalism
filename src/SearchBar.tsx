import { useState } from "react";
const SearchBar = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="SearchBar">
        <input className="SearchInput" value={"Search..."}></input>
        <button className="SearchButton">🤟🏻</button>
      </div>
    </>
  );
};

export default SearchBar;
