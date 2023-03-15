import React, { useContext } from "react";
import moment from "moment";
import { User } from "../Contexts/UserContext";

function greet() {
  // Component to greet the user appropriately
  var time = moment().format("a"); //Gives am or pm
  var h = moment().format("h"); //gives the hours
  var greetMsg = "";
  // console.log(`${time}  ${h}`)
  // During mornign time, if it's am
  if (time === "am") {
    if (h == 12) {
      greetMsg = "Good Morning! Hustler💪🏻";
    }
    if (h < 2)
      //Early morning time (12AM-2AM)
      greetMsg = "Good Morning! Hustler💪🏻";
    else if (h < 6)
      // 3AM - 5AM
      greetMsg = "Good Morning! Ealry Bird😇";
    else if (h > 7 && h < 12)
      // 6AM-12PM
      greetMsg = "Own The Day😎";
  } else if (time === "pm") {
    if (h == 12 || h < 4) {
      //12PM-3PM
      greetMsg = "Good Afternoon🌞";
    } else if (h <= 7) {
      // 4PM-7PM
      greetMsg = "Good Evening🌆";
    } else if (h > 7 && h <= 10) {
      // 8PM-10PM
      greetMsg = "Good Night🌃";
    } else {
      //10PM - 12AM
      greetMsg = "Great Going 🦉";
    }
  }

  return greetMsg;
}

const Greetings = () => {
  const { user } = useContext(User);
  return (
    <div>
      {/* Render the greeting as per the requirement */}
      <h1 className="text-white text-6xl">{`${
        user.name.split(" ")[0]
      }, ${greet()}`}</h1>
    </div>
  );
};

export default Greetings;
