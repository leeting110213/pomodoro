import React, { createContext, useState } from "react";

const ColorContext = createContext();

export const ColorContextProvider = (props) => {
  const [bg_color, setbg_color] = useState("bg_pomp");
  const [nav_color, setnav_color] = useState("nav_pomp");
  const [item, setitem] = useState("pomo");
  return (
    <ColorContext.Provider
      value={{ bg_color, setbg_color, item, setitem, nav_color, setnav_color }}
    >
      {props.children}
    </ColorContext.Provider>
  );
};

export { ColorContext };
