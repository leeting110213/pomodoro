import React, { useContext, useState } from "react";
import { IoAddCircle } from "react-icons/io5";
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";
import { PomoContext } from "../context/pomoContext";

export default function Task() {
  const [itemInfo, setItemInfo] = useState(false);
  const [pompTimes, setpompTimes] = useState(1);
  const [textarea, settextarea] = useState(false);
  const [task_name, settask_name] = useState("");
  const [taxtarea_text, settaxtarea_text] = useState("");
  const { taskList, settaskList, setnowtask } = useContext(PomoContext);

  const addTaskList = (taskList) => {
    let newlist = {
      task_name: task_name,
      pompTimes: pompTimes,
      taxtarea_text: taxtarea_text,
      taskTimes: 0,
      time: Date.now(),
    };
    if (taskList.length === 0) {
      settaskList([newlist]);
      setItemInfo(false);
      settask_name("");
      setpompTimes(1);
      settaxtarea_text("");
      setnowtask("");
    } else {
      let updatedTaskList = [...taskList, newlist];
      settaskList(updatedTaskList);
      setItemInfo(false);
      settask_name("");
      setpompTimes(1);
      settaxtarea_text("");
    }
  };

  return (
    <>
      {!itemInfo ? (
        <div
          className="task_pre_container my-3 d-flex justify-content-center align-items-center fs-4"
          onClick={() => setItemInfo(true)}
        >
          <IoAddCircle className="me-2" />
          Add Task
        </div>
      ) : (
        <div className="color_white border_rd10px my-3">
          <input
            type="text"
            className="task_name_info my-3 ps-3 fw-bolder fst-italic"
            placeholder="任務名稱"
            value={task_name}
            onChange={(e) => settask_name(e.target.value)}
          ></input>
          <div className="ms-3 fw-bolder">番茄鐘設定</div>
          <div className="ms-3 my-2 d-flex">
            <input
              type="text"
              size={1}
              value={pompTimes}
              disabled
              className="task_number ps-3 me-2 border_rd10px"
            ></input>
            <button
              className="task_btn me-2 d-flex align-items-center"
              onClick={() => setpompTimes(pompTimes + 1)}
            >
              <BsFillCaretUpFill />
            </button>

            <button
              className="task_btn d-flex align-items-center"
              disabled={pompTimes <= 1 ? "disabled" : ""}
              onClick={() => setpompTimes(pompTimes - 1)}
              style={pompTimes <= 1 ? { opacity: "0.5" } : { opacity: "1" }}
            >
              <BsFillCaretDownFill />
            </button>
          </div>
          {textarea ? (
            <div className="px-3 my-3">
              <textarea
                className="form-control task_textarea "
                placeholder="Some note"
                id="floatingTextarea"
                value={taxtarea_text}
                onChange={(e) => settaxtarea_text(e.target.value)}
              ></textarea>
            </div>
          ) : (
            <div
              className="ms-3 add_note my-2"
              onClick={() => settextarea(true)}
            >
              +add note
            </div>
          )}
          <div className="d-flex  justify-content-end align-items-center px-2 footer">
            <div
              className="mx-2 cursor"
              onClick={() => {
                setpompTimes(1);
                settask_name("");
                settaxtarea_text("");
                settextarea(false);
                setItemInfo(false);
              }}
            >
              cancel
            </div>
            <button
              type="button"
              className="btn btn-dark mx-2"
              disabled={task_name ? false : true}
              onClick={() => addTaskList(taskList)}
            >
              save
            </button>
          </div>
        </div>
      )}
    </>
  );
}
