import React, { useState, Fragment } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";
import PersianCalendar from 'react_simple_persian_calendar';
function App() {
  const [selectedTime, setSelecteTime] = useState();
  const onChange = (date) => {
    console.log(date);
    setSelecteTime(date);
  };

  return (
    <Fragment>
      <div class="jumbotron text-center">
        <h1 class="display-4 ">React Simple Persian Calendar</h1>
        <p class="lead">
          This is the page in which you can see{" "}
          <a href="https://www.npmjs.com/package/react_simple_persian_calendar">
            react_simple_Persian_calendar
          </a>{" "}
          component example.
        </p>
        <hr class="my-4" />
        <div className="container" style={{ height: "250px" }}>
          <p>Click on the Component below:</p>
          <PersianCalendar onChange={onChange} />
        </div>
      </div>
      <footer class="footer mt-auto py-3">
        <div class="container">
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
                <a href="https://github.com/abedalavi/react_simple_Persian_calendar">
                  <i className="fab fa-github"></i>
                </a>
                {"    "}
                <a href="https://www.npmjs.com/package/react_simple_Persian_calendar">
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
