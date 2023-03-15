import moment from "moment";
import React, { useState } from "react";

const Time = () => {
  //State storing the current time
  const [time, setTime] = useState(moment().format("h:mm"));
  const [amPm, setAmPm] = useState(moment().format("a"));
  setInterval(() => {
    // Updating the time every second
    setTime(moment().format("h:mm"));
    setAmPm(moment().format("a"));
  }, 1000);

  return (
    <div className="text-[1050%] mt-[-10%] font-light text-white">
      {time}
      <span className="text-sm font-bold">{amPm.toUpperCase()}</span>
    </div>
  );
};

export default Time;
