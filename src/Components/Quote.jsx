import React from "react";
import quotes from "../data/Quotes"; //Get the data from the quotes file
import moment from "moment";

// function to get the day number
function quoteSelector() {
  var d = moment().format("Do");
  var day = parseInt(d.slice(0, 2));
  return day;
}

// Render the quote as per the index corresponding to the date
const Quote = () => {
  return (
    <div className="text-white mt-5 text-center font-normal bg-black text-2xl bg-opacity-60 shadow-2xl rounded-xl p-4 backdrop-blur-lg">
      {quotes[quoteSelector()].q}
    </div>
  );
};

export default Quote;
