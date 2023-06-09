import React from "react";
import "../css/TriveeeaLogin.css";

function TriveeeaLogin() {
  const handleClick = async (e) => {
    // Perform login logic here
    // Redirect to another page
    window.location.href = "/Triveeea";
  };

  return (
    <>
      <div className="tdetails">
        <div className="wraptriv">
          <div className="tname-container">
            <label htmlFor="">Name</label>
            <input type="text" />
          </div>
          <div className="tusn-container">
            <label htmlFor="">USN</label>
            <input type="text" />
          </div><div className="tuniquebutton">
          <button onClick={handleClick}>Login</button>
        </div>
        </div>
        
      </div>
    </>
  );
}

export default TriveeeaLogin;
