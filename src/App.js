import { useContext } from "react";
import "./App.css";
import Nav from "./components/nav";
import Timmer from "./components/timmer";
import { ColorContext } from "./context/colorContext";
import Tasks from "./components/tasks";
import Ongoing from "./components/ongoing";

function App() {
  const { bg_color, nav_color } = useContext(ColorContext);
  return (
    <>
      <div className={`${bg_color} `}>
        <Nav />
        <div className="d-flex justify-content-center my-5 pt-5  ">
          <Timmer />
        </div>
        <div className="d-flex justify-content-center ">
          <Ongoing />
        </div>
        <div className="d-flex justify-content-center my-5 pb-4 ">
          <Tasks />
          <div style={{ height: "50px" }}></div>
        </div>
        <footer
          className={`d-flex justify-content-center ${nav_color} align-items-center`}
          style={{ height: "30px", color: "white" }}
        >
          練習用，參考自
          <a href={`https://pomofocus.io/`} style={{ color: "white" }}>
            pomofocus
          </a>{" "}
        </footer>
      </div>
    </>
  );
}

export default App;
