import React from "react";

function EmployeeContact(props) {
  console.log(props);
  return (
    <div className="empcontact-div">
      <div>
        <p>{props.displayName}</p>
        <p>{props.data}</p>
      </div>
      <div>
        <img className="arrowimg"
          src="https://cdn4.iconfinder.com/data/icons/browser-ui-small-size-optimized-set/154/arrow-right-navigation-browser-512.png"
          alt=">"
        ></img>
      </div>
    </div>
  );
}

export default EmployeeContact;
