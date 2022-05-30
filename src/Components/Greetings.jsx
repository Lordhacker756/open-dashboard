import React, { useContext } from "react";
import moment from "moment";
import UserContext, { User } from "../Contexts/UserContext";

function greet() {
  var time = moment().format("a");
  var h = moment().format("h");
  var greetMsg = "";
  // During mornign time, if it's am
  if (time === "am") {
    if (time === "am" && h < 7) //Early morning time
    greetMsg = "Good Morning! Early Bird!";
    else 
    greetMsg = "Own the day!";
  } 

  else
  {
    if(h<4)
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
