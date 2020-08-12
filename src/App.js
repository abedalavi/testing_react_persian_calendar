import React, { useState, Fragment } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";
import PersianCalendar from "react-easy-persian-calendar";

function App() {
  const [selectedTime, setSelecteTime] = useState();
  const [persianTime, setPersianTime] = useState("۱۳۳۳/۱۱/۳۰");
  const onChange1 = (date) => {
    console.log(date);
    setSelecteTime(date);
  };
  const onChange2 = (date) => {
    console.log(date);
    setSelecteTime(date);
  };
  const onChange3 = (date) => {
    console.log(date);
    setSelecteTime(date);
  };
  const onChange4 = (date) => {
    console.log(date);
    setSelecteTime(date);
  };


  return (
    <Fragment>
      <div className="jumbotron text-center">
        <h1 className="display-4 ">React Easy Persian Calendar</h1>
        <p className="lead">
          This is the page in which you can see{" "}
          <a href="https://www.npmjs.com/package/react-easy-persian-calendar">
            react-easy-Persian-calendar
          </a>{" "}
          component example.
        </p>
        <hr className="my-4" />
        <div className="container containerStyle">
          <div className="row rowstyle">
            <div className="col-sm text-center first-column">
              Without currentTime props:
            </div>
            <div className="col-sm text-center second-column">
              <PersianCalendar
                onChange={onChange1}
              />
            </div>
          </div>
          <hr />
          <div className="row rowstyle">
            <div className="col-sm text-center first-column">
              With currentTime: new Date("1987,01,22"):
            </div>
            <div className="col-sm text-center second-column">
              <PersianCalendar
                onChange={onChange2}
                currentTime={new Date("1987,01,22")}
              />
            </div>
          </div>
          <hr />
          <div className="row rowstyle">
            <div className="col-sm text-center first-column">
              With currentPersianTime={"{"}۱۳۳۳/۱۱/۳۰{"}"}:
            </div>
            <div className="col-sm text-center second-column">
              <PersianCalendar
                onChange={onChange3}
                currentPersianTime={persianTime}
              />
            </div>
          </div>
          <hr />
          <div className="row rowstyle">
            <div className="col-sm text-center first-column">
              With both
              <br/>
              currentPersianTime={"{"}۱۳۸۶/۱۲/۱۶{"}"} 
              <br/>
              currentTime={"{"}new Date("1987,01,22"){"}"}:
            </div>
            <div className="col-sm text-center second-column">
              <PersianCalendar
                onChange={onChange4}
                currentTime={new Date("1987,01,22")}
                currentPersianTime={"۱۳۸۶/۱۲/۱۶"}
              />
            </div>
          </div>
          <hr />
          <div className="row rowstyle">
            <div className="col-sm text-center first-column">
              with startBlank={"{"}true{"}"}
            </div>
            <div className="col-sm text-center second-column">
              <PersianCalendar
                onChange={onChange4}
                startBlank={true}
              />
            </div>
          </div>
          <hr />
          <div className="row rowstyle">
            <div className="col-sm text-center first-column">
              with textStyle="myStyle"
            </div>
            <div className="col-sm text-center second-column">
              <PersianCalendar
                onChange={onChange4}
                textStyle="myStyle"
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
                <a href="https://github.com/abedalavi/react-easy-persian-calendar">
                  <i className="fab fa-github"></i>
                </a>
                {"    "}
                <a href="https://www.npmjs.com/package/react-easy-persian-calendar">
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
