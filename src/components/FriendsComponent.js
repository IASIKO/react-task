import React from "react";
import "./FriendsComponent.css";

const FriendsComponent = (props) => {
  
  return (
    <div className="headerWrapper">
      <div className="header">
        <img alt="" />
        <fieldset>
          <legend>info</legend>
          <div>
            <strong></strong>
          </div>
          <div>
            <i></i>
          </div>
          <br></br>
          <div>
            <span>Email</span>
          </div>
          <div>
            <span>Ip Address</span>
          </div>
          <div>
            <span>Job Area</span>
          </div>
          <div>
            <span>Job type</span>
          </div>
        </fieldset>
        <fieldset>
          <legend>Address</legend>
          <div>
            <strong></strong>
          </div>
          <div>
            <span>City</span>
          </div>
          <div>
            <span>Country</span>
          </div>
          <div>
            <span>State</span>
          </div>
          <div>
            <span>Street Address</span>
          </div>
          <div>
            <span>ZIP</span>
          </div>
        </fieldset>
      </div>
    </div>
  );
};

export default FriendsComponent;
