import { Fragment } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./nav.css";
/*import Search from '../search/Search'*/
import SearchIcon from "../icons/SearchIcon";
import { useState } from "react";
import Geo from "../icons/Geo";
import "../search/search.css";

import Face from "../face/Face";
import FaceTurku from "../face/FaceTurku";
import FaceOulu from "../face/FaceOulu";
import FaceVaasa from "../face/FaceVaasa";

import "../face/face.css";
import "../face/tarjeta/tarjeta.css";

export default function Nav() {
  const [countA, setCount] = useState(0);
  const buttonSum = () => {
    setCount(countA + 1);
  };
  const buttonRed = () => {
    setCount(countA - 1);
  };
  const [countC, setCountC] = useState(0);
  const buttonSumC = () => {
    setCountC(countC + 1);
  };
  const buttonRedC = () => {
    setCountC(countC - 1);
  };
  let numG = countA + countC;

  /*  let numGuest = numG ? `${numG} guests` : "Add guests"; */

  const [isActive, setIsActive] = useState(false);
  const toggleClass = () => {
    setIsActive(!isActive);
  };
  const claseElemento = isActive ? "bar active" : "bar search";

  const backg = isActive ? "b noBack" : "b back";

  return (
    <div>
      {/*    <Search back={backg} toggle={toggleClass} claseEle={claseElemento} /> */}
      <BrowserRouter>
        <Fragment>
          <div className={backg} onClick={toggleClass}></div>
          <div className={claseElemento} id="search-bar-t">
            <div className="search-bar">
              <div className="location-area">
                <div className="location-head">
                  <h2>LOCATION</h2>
                  <input
                    type="text"
                    placeholder="Add location"
                    list="options"
                  />
                  <datalist id="options">
                    <option value="Helsinki, Finland"></option>
                    <option value="Turku, Finland"></option>
                    <option value="Oulu, Finland"></option>
                    <option value="Vaasa, Finland"></option>
                  </datalist>
                </div>
                <div className="location-options">
                  <Link to="/">
                    <div className="option">
                      <div className="box-icon-search">
                        <Geo />
                      </div>
                      <h2>Helsinki, Finland</h2>
                    </div>
                  </Link>
                  <Link to="/turku">
                    <div className="option">
                      <div className="box-icon-search">
                        <Geo />
                      </div>
                      <h2>Turku, Finland</h2>
                    </div>
                  </Link>
                  <Link to="/oulu">
                    <div className="option">
                      <div className="box-icon-search">
                        <Geo />
                      </div>
                      <h2>Oulu, Finland</h2>
                    </div>
                  </Link>
                  <Link to="/vaasa">
                    <div className="option">
                      <div className="box-icon-search">
                        <Geo />
                      </div>
                      <h2>Vaasa, Finland</h2>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="guests-area">
                <div className="guests-head">
                  <h2>Guests</h2>
                  <input
                    type="text"
                    placeholder="Add guests"
                    defaultValue={numG + "guests"}
                  />
                </div>
                <div className="guests-options">
                  <div className="adults">
                    <h2>Adults</h2>
                    <h3>Ages 13 or above</h3>
                    <div className="counter">
                      <button className="minus" onClick={buttonRed}>
                        _
                      </button>
                      <p>{countA}</p>
                      <button onClick={buttonSum}>+</button>
                    </div>
                  </div>
                  <div className="children">
                    <h2>Children</h2>
                    <h3>Ages 2 to 12</h3>
                    <div className="counter">
                      <button className="minus" onClick={buttonRedC}>
                        _
                      </button>
                      <p>{countC}</p>
                      <button onClick={buttonSumC}>+</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="search-area">
                <div className="search-button">
                  <button className="search-button-cont" onClick={toggleClass}>
                    <div className="lupa-search">
                      <SearchIcon />
                    </div>
                    <p>Search</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
        <Routes>
          <Route />
          {/*Recordar activar los imports*/}
          <Route exact path="/" element={<Face toggle={toggleClass} />} />
          <Route
            exact
            path="/turku"
            element={<FaceTurku toggle={toggleClass} />}
          />
          <Route
            exact
            path="/oulu"
            element={<FaceOulu toggle={toggleClass} />}
          />
          <Route
            exact
            path="/vaasa"
            element={<FaceVaasa toggle={toggleClass} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
