import React, { useContext, useEffect, useState } from "react";
import { TbPlayerSkipForwardFilled } from "react-icons/tb";
import { ColorContext } from "../context/colorContext";
import { PomoContext } from "../context/pomoContext";

export default function Timmer() {
  const [paused, setPaused] = useState(true);
  const [timmer, setTimmer] = useState("25:00");
  const [time, settime] = useState(1499);
  // const [item, setitem] = useState("pomo");
  const { setbg_color, item, setitem, setnav_color } = useContext(ColorContext);
  const { times, settimes, taskList, settaskList, nowtask, setnowtask } =
    useContext(PomoContext);

  const notify = () => {
    if (window.Notification && Notification.permission !== "denied") {
      Notification.requestPermission(function (status) {
        if (item === "pomo") {
          let notification = new Notification("Time to break!", {
            body: "該休息一下啦!",
            vibrate: [200],
            silent: false,
            requireInteraction: true,
          });
        } else {
          let notification = new Notification("Time to focus!", {
            body: "繼續努力囉!",
            vibrate: [200],
            silent: false,
            requireInteraction: true,
          });
        }
      });
    }
  };
  const startTimmer = () => {
    setPaused(!paused);
  };
  let timid;

  useEffect(() => {
    if (!paused && time > 0) {
      timid = setInterval(countDown, 1000);
    } else if (time === 0) {
      clearTimeout(timid);
      setPaused(true);

      if (item === "pomo") {
        notify();
        setitem("short");
        settime(299);
        setTimmer("05:00");
        setbg_color("bg_short");
        setnav_color("nav_short");
        settimes(times + 1);
      } else if (item === "short") {
        notify();
        setitem("pomo");
        settime(1499);
        setTimmer("25:00");
        setbg_color("bg_pomp");
        setnav_color("nav_pomp");
      } else if (item === "long") {
        notify();
        setitem("pomo");
        settime(1499);
        setTimmer("25:00");
        setbg_color("bg_pomp");
        setnav_color("nav_pomp");
      }
    }
    return () => {
      clearTimeout(timid);
    };
  }, [paused, time]);

  const countDown = () => {
    settime(time - 1);
    let min =
      Math.floor(time / 60) < 10
        ? `0${Math.floor(time / 60)}`
        : Math.floor(time / 60);
    let sec = time % 60 < 10 ? `0${time % 60}` : time % 60;
    setTimmer(`${min}:${sec}`);
  };

  const addpomo = () => {
    let newlist = taskList.map((v, i) => {
      if (v.time === nowtask.time) {
        return { ...v, taskTimes: v.taskTimes + 1 };
      } else {
        return v;
      }
    });
    settaskList(newlist);
  };

  return (
    <div className="timmer_container">
      <div className="d-flex flex-column">
        <ul className="d-flex justify-content-around py-2 ps-0 pe-0 ">
          <li
            className="list-style-type fw-bold px-4 text_color border_rd10px "
            style={
              item === "pomo"
                ? { backgroundColor: "rgba(113, 50, 50, 0.5)" }
                : { cursor: "pointer" }
            }
            onClick={() => {
              setitem("pomo");
              settime(1499);
              setTimmer("25:00");
              setPaused(true);
              setbg_color("bg_pomp");
              setnav_color("nav_pomp");
            }}
          >
            番茄鐘
          </li>
          <li
            className="list-style-type fw-bold px-4 text_color border_rd10px"
            style={
              item === "short"
                ? { backgroundColor: "rgba(113, 50, 50, 0.5)" }
                : { cursor: "pointer" }
            }
            onClick={() => {
              setitem("short");
              settime(299);
              setTimmer("05:00");
              setPaused(true);
              setbg_color("bg_short");
              setnav_color("nav_short");
            }}
          >
            小休息
          </li>
          <li
            className="list-style-type fw-bold px-4 text_color border_rd10px"
            style={
              item === "long"
                ? { backgroundColor: "rgba(113, 50, 50, 0.5)" }
                : { cursor: "pointer" }
            }
            onClick={() => {
              setitem("long");
              settime(900);
              setTimmer("15:00");
              setPaused(true);
              setbg_color("bg_long");
              setnav_color("nav_long");
            }}
          >
            大休息
          </li>
        </ul>
        <h1 className="timmer_text text-center">{timmer}</h1>
        <div className="d-flex justify-content-around align-items-center my-3 position-relative ">
          {paused ? (
            <button
              className={`btn timmer_botton tx_${item} `}
              onClick={startTimmer}
            >
              START
            </button>
          ) : (
            <button
              className={`btn timmer_botton tx_${item} `}
              onClick={startTimmer}
            >
              PAUSE
            </button>
          )}

          {!paused ? (
            <TbPlayerSkipForwardFilled
              className="fs-1 position-absolute top-50  translate-middle-y  end_50px "
              style={{ color: "white" }}
              onClick={() => {
                if (item === "pomo") {
                  setitem("short");
                  settime(299);
                  setTimmer("05:00");
                  setPaused(true);
                  setbg_color("bg_short");
                  setnav_color("nav_short");
                  addpomo();

                  if (times % 4 === 0) {
                    setitem("long");
                    settime(900);
                    setTimmer("15:00");
                    setPaused(true);
                    setbg_color("bg_long");
                    setnav_color("nav_long");
                  }
                } else if (item === "short") {
                  setitem("pomo");
                  settime(1499);
                  setTimmer("25:00");
                  setPaused(true);
                  setbg_color("bg_pomp");
                  setnav_color("nav_pomp");
                  settimes(times + 1);
                } else if (item === "long") {
                  setitem("pomo");
                  settime(1499);
                  setTimmer("25:00");
                  setPaused(true);
                  setbg_color("bg_pomp");
                  setnav_color("nav_pomp");
                  settimes(times + 1);
                }
              }}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
