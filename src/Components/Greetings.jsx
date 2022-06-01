import React, { useContext } from "react";
import moment from "moment";
import { User } from "../Contexts/UserContext";

function greet() {
  var time = moment().format("a");
  var h = moment().format("h");
  var greetMsg = "";
  // During mornign time, if it's am
  if (time === "am") {
    console.log(h, time)
    if (h < 2 || h==12) //Early morning time
    greetMsg = "Good Morning! Hustler💪🏻";
    else if (h<6)
    greetMsg = "Good Morning! Ealry Bird😇";
    else
    greetMsg = "Own The Day😎"
  } 

  else if(time === "pm")
  {
    if(h===12 || h<4)
    {
      greetMsg="Good Afternoon🌞"
    }
    else if(h<=7)
    {
      greetMsg="Good Evening🌆"
    }
    else if(h > 7 && h<10)
    {
      greetMsg="Good Night🌃"
    }
    else
    {
      greetMsg="Great Going 🦉"
    }
  }

  return greetMsg;
}

const Greetings = () => {
  const {user} = useContext(User)
  return (
    <div>
      <h1 className="text-white font-thin text-5xl">{`${greet()}${user.name}`}</h1>
    </div>
  );
};

export default Greetings;
