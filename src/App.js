import React, { useState, Fragment } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import PersianCalendar from "react_simple_persain_calendar";
function App() {
  const [selectedTime, setSelecteTime ]= useState();
  const onChange = (date) => {
    console.log(date);
    setSelecteTime(date);
  };

  return (
    <Fragment>
      <PersianCalendar onChange={onChange} /> 
      <span>{selectedTime}</span>
    </Fragment>
  );
}

export default App;
