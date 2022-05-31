import React, { useContext } from "react";
import moment from "moment";
import UserContext, { User } from "../Contexts/UserContext";

function greet() {
  var time = moment().format("a");
  var h = moment().format("h");
  var greetMsg = "";
  console.log(time)
  // During mornign time, if it's am
  if (time === "am") {
    if (h < 2 || h==12) //Early morning time
    greetMsg = "Good Morning! Hustler";
    else if (h<6)
    greetMsg = "Good Morning! Ealry Bird";
    else
    greetMsg = "Own The Day!"
  } 

  else if(time === "pm")
  {
    if(h==12 || h<4)
    {
      greetMsg="Good Afternoon!"
    }
    else if(h<7)
    {
      greetMsg="Good Evening!"
    }
    else
    {
      greetMsg="Good Night"
    }
  }

  return greetMsg;
}

const Greetings = () => {
  const {user, setUser} = useContext(User)
  console.log(user.name)
  return (
    <div>
      <h1 className="text-white font-thin text-5xl">{`${greet()}, ${user.name}`}</h1>
    </div>
  );
};

export default Greetings;
