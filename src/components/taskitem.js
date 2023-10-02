import React, { useContext, useState } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { IoMdMore } from "react-icons/io";
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";
import { PomoContext } from "../context/pomoContext";
import Completetask from "./completetask";

export default function Taskitem({ value }) {
  const { taskList, settaskList, nowtask, setnowtask } =
    useContext(PomoContext);
  const [taskiteminfo, settaskiteminfo] = useState(false);
  const [textarea_old, settextarea_old] = useState(false);
  const [taxtarea_text, settaxtarea_text] = useState(value.taxtarea_text);
  const [taskitempompTimes, settaskitempompTimes] = useState(value.pompTimes);
  const [task_name_old, settask_name_old] = useState(value.task_name);
  const [completetask, setcompletetask] = useState(false);
  const changetask = (taskList, index) => {
    const initialTaskList = JSON.parse(JSON.stringify(taskList));
    let newlist = {
      task_name: task_name_old,
      pompTimes: taskitempompTimes,
      taxtarea_text: taxtarea_text,
      taskTimes: value.taskTimes,
      time: value.time,
    };
    const newarry = initialTaskList.map((v, i) => {
      if (v.time === value.time) {
        return newlist;
      } else {
        return v;
      }
    });

    settaskList(newarry);
    settaskiteminfo(false);
  };

  const deleteitem = () => {
    const initialTaskList = JSON.parse(JSON.stringify(taskList));
    const newlist = initialTaskList.filter(
      (item, idx) => item.time !== value.time
    );

    settaskList(newlist);
    settaskiteminfo(false);
  };

  const handlecancelcompletetask = () => {
    setcompletetask(false);
  };

  const handlcompletetask = () => {
    if (value.time === nowtask.time) {
      deleteitem();
      setnowtask("");
    } else {
      deleteitem();
    }
  };

  return (
    <>
      {!taskiteminfo ? (
        <div
          className={`task_pre_item_container mt-3 d-flex flex-column justify-content-center align-items-center fs-4 ${
            value.time === nowtask.time ? "boder_left" : "boder_left_no"
          } `}
          onClick={() => setnowtask(value)}
        >
          <div className="d-flex  justify-content-between w-100 px-3 my-3">
            <div className="d-flex align-items-center ">
              <BsFillCheckCircleFill
                className="me-2 item_successful"
                onClick={() => setcompletetask(true)}
                style={completetask ? { color: "rgb(163, 66, 66)" } : {}}
              />
              <span
                style={
                  completetask
                    ? {
                        color: "rgb(196, 195, 194)",
                        textDecoration: "line-through",
                      }
                    : {}
                }
              >
                {value.task_name}
              </span>
            </div>

            <div>
              <span className="fw-bold fs-4">{value.taskTimes}</span>
              <span className="fs-5">/{value.pompTimes}</span>
              <button
                type="button"
                className="btn btn-outline-secondary ms-3 px-2"
                onClick={() => settaskiteminfo(true)}
              >
                <IoMdMore className="fs-4" />
              </button>
            </div>
          </div>
          {value.taxtarea_text ? (
            <div className="mb-3 fs-5 d-flex justify-content-start w-100 ms-5 ps-4">
              {value.taxtarea_text}
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        <div className="color_white border_rd10px my-3">
          <input
            type="text"
            className="task_name_info my-3 ps-3 fw-bolder fst-italic"
            placeholder="任務名稱"
            value={task_name_old}
            onChange={(e) => settask_name_old(e.target.value)}
          ></input>
          <div className="ms-3 fw-bolder">番茄鐘設定</div>
          <div className="ms-3 my-2 d-flex">
            <input
              type="text"
              size={1}
              value={value.taskTimes}
              disabled
              className="task_number ps-3 me-2 border_rd10px "
            ></input>
            <span className="fs-4 me-1">/</span>
            <input
              type="text"
              size={1}
              value={taskitempompTimes}
              disabled
              className="task_number ps-3 me-2 border_rd10px"
            ></input>
            <button
              className="task_btn me-2 d-flex align-items-center"
              onClick={() => settaskitempompTimes(taskitempompTimes + 1)}
            >
              <BsFillCaretUpFill />
            </button>

            <button
              className="task_btn d-flex align-items-center"
              onClick={() => settaskitempompTimes(taskitempompTimes - 1)}
              disabled={taskitempompTimes <= 1 ? "disabled" : ""}
              style={
                taskitempompTimes <= 1 ? { opacity: "0.5" } : { opacity: "1" }
              }
            >
              <BsFillCaretDownFill />
            </button>
          </div>
          {textarea_old || value.taxtarea_text ? (
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
              onClick={() => settextarea_old(true)}
            >
              +add note
            </div>
          )}

          <div className="d-flex justify-content-between align-items-center px-2 footer">
            <div className="mx-2 cursor" onClick={() => deleteitem(taskList)}>
              Delete
            </div>
            <div className="d-flex align-items-center">
              <div
                className="mx-2 cursor"
                onClick={() => settaskiteminfo(false)}
              >
                Cancel
              </div>
              <button
                type="button"
                className="btn btn-dark mx-2"
                onClick={() => changetask(taskList)}
              >
                save
              </button>
            </div>
          </div>
        </div>
      )}
      {completetask ? (
        <div>
          <Completetask
            handlecancelcompletetask={handlecancelcompletetask}
            handlcompletetask={handlcompletetask}
          />
        </div>
      ) : (
        ""
      )}
    </>
  );
}
