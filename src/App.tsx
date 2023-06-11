import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Heading from "./Heading";
import SearchTab from "./SearchTab";
import ItemsContainer from "./ItemsContainer";
const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App"> djk01281</div>
      <Heading />
      <SearchTab />
      <ItemsContainer />
    </>
  );
};

export default App;
