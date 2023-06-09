import React, { useState } from "react";
import "../css/photography.css";

function Photographia() {
  const [selectedType, setSelectedType] = useState();

  return (
    
    <div className="centered-wrapper">
      <div className="container">
        <div className="loginviaa">
          <h1>LOGIN VIA</h1>
        </div>
        <div className="radiobuttons">
          <div className="radio-optionu">
            <label htmlFor="loginType">Unique Id</label>
            <input
              type="radio"
              name="loginType"
              value="uniqueId"
              onChange={(e) => {
                setSelectedType(e.target.value);
              }}
            />
          </div>
          <div className="radio-option">
            <label htmlFor="loginType">Email Id</label>
            <input
              type="radio"
              name="loginType"
              value="email"
              onChange={(e) => {
                setSelectedType(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="login-container">
          {selectedType === "uniqueId" && <UniqueIdLogin />}
          {selectedType === "email" && <EmailLogin />}
        </div>
      </div>
    </div>
  );
}

function UniqueIdLogin() {
  const handleClick = async (e) => {
    window.location.href = "/DetailsPage";
  };

  return (
    <>
      <div className="input-container">
        <label htmlFor="">Unique id</label>
        <input type="text" />
      </div>
      <div className="button-container">
        <button onClick={handleClick}>Login</button>
      </div>
    </>
  );
}

function EmailLogin() {
  const handleClick = async (e) => {
    // Perform login logic here
    // Redirect to another page
    window.location.href = "/EventPage";
  };

  return (
    <>
      <div className="input-container">
        <label htmlFor="">Email id</label>
        <input type="text" />
      </div>
      <div className="input-container">
        <label htmlFor="">Name</label>
        <input type="text" />
      </div>
      <div className="button-container">
        <button onClick={handleClick}>Login</button>
      </div>
    </>
  );
}

export default Photographia;
