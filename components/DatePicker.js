import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export default function Calender(props) {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div style={{ display: "flex", flexDirection: "row", margin: "10px" }}>
      <span>{props.title}</span>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
    </div>
  );
}
