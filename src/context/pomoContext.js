import { createContext, useEffect, useState } from "react";

const PomoContext = createContext();

export const PomoContextProvider = (props) => {
  const [taskList, settaskList] = useState([]);
  const [memberOfTime, setMemberOfTime] = useState("1");
  const [nowtask, setnowtask] = useState("");
  const [times, settimes] = useState(1);
  useEffect(() => {
    if (taskList.length < 1) {
      const newlist = {
        task_name: "Time to focus!",
        time: Date.now(),
      };
      setnowtask(newlist);
    }

    if (!nowtask && taskList.length > 0) {
      setnowtask(taskList[0]);
    }
  }, [nowtask, taskList.length]);

  return (
    <PomoContext.Provider
      value={{
        taskList,
        settaskList,
        memberOfTime,
        setMemberOfTime,
        nowtask,
        setnowtask,
        times,
        settimes,
      }}
    >
      {props.children}
    </PomoContext.Provider>
  );
};
export { PomoContext };
