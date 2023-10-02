import React, { useContext } from "react";
import { PomoContext } from "../context/pomoContext";

export default function Ongoing() {
  const { nowtask, times } = useContext(PomoContext);
  return (
    <div className=" ongoing_container d-flex justify-content-center align-items-center flex-column">
      <div className="fs-5 text_color_1"># {times}</div>
      <div className="fs-3 text_color_2">{nowtask.task_name}</div>
    </div>
  );
}
