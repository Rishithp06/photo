import React, { useState } from "react";
import "../css/TriveeeaID.css";

function TriveeeaID() {
  const [selectedType, setSelectedType] = useState();

  return (
    <div className="tfullpage">
    <div className="triveeea-id-container">
      
      <div className="tradio-option">
        <label htmlFor="tloginType">Unique Id</label>
        <input
          type="radio"
          name="tloginType"
          value="TuniqueId"
          onChange={(e) => {
            setSelectedType(e.target.value);
          }}
        />
      </div>
      <div className="tlogin-container">
        {selectedType === "TuniqueId" && <TriveeeaF />}
      </div>
    </div>
    </div>
  );
}

function TriveeeaF() {
  const handleClick = async (e) => {
    window.location.href = "/TriveeeaLogin";
  };

  return (
    <>
      <div className="tinput-container">
        
        <input type="ttext" />
      </div>
      <div className="tbutton-container">
        <button onClick={handleClick}>Login</button>
      </div>
    </>
  );
}

export default TriveeeaID;
