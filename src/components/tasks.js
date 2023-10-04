import React, { useContext, useEffect } from "react";
import Task from "./task";
import Taskitem from "./taskitem";
import { PomoContext } from "../context/pomoContext";
import Completetask from "./completetask";

export default function Tasks() {
  const { taskList } = useContext(PomoContext);

  return (
    <>
      <div className="task_container  ">
        <div className="tasks_text">Tasks</div>
        <div className="d-flex flex-column  ">
          {taskList.map((v, i) => (
            <Taskitem key={v.time} value={v} />
          ))}

          <Task />
        </div>
      </div>
    </>
  );
}
