import React, { useState, Fragment } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";
import PersianCalendar from "react_simple_persian_calendar";
function App() {
  const [selectedTime, setSelecteTime] = useState();
  const onChange = (date) => {
    console.log(date);
    setSelecteTime(date);
  };

  return (
    <Fragment>
      <div className="jumbotron text-center">
        <h1 className="display-4 ">React Simple Persian Calendar</h1>
        <p className="lead">
          This is the page in which you can see{" "}
          <a href="https://www.npmjs.com/package/react_simple_persian_calendar">
            react_simple_Persian_calendar
          </a>{" "}
          component example.
        </p>
        <hr className="my-4" />
        <div className="container containerStyle">
          <div className="row rowstyle">
            <div className="col-sm text-center first-column">Without currentTime props:</div>
            <div className="col-sm text-center second-column">
              <PersianCalendar
                onChange={onChange}
                // currentTime={new Date("1987,01,22")}
              />
            </div>
          </div>
          <hr/>
          <div className="row rowstyle">
            <div className="col-sm text-center first-column">With currentTime: new Date("1987,01,22"):</div>
            <div className="col-sm text-center second-column">
              <PersianCalendar
                onChange={onChange}
                currentTime={new Date("1987,01,22")}
              />
            </div>
          </div>
        </div>
      </div>
      <footer className="footer mt-auto py-3">
        <div className="container">
          <div className="row">
            <div className="col">
              {" "}
              Written by{" "}
              <a href="http://abedalavi.ir/" className="href">
                Abed Alavi
              </a>
            </div>
            <div className="col text-center">
              <h1>
                <a href="https://github.com/abedalavi/react_simple_persian_calendar">
                  <i className="fab fa-github"></i>
                </a>
                {"    "}
                <a href="https://www.npmjs.com/package/react_simple_persian_calendar">
                  <i className="fab fa-npm"></i>
                </a>
              </h1>
            </div>
            <div className="col"></div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}

export default App;
