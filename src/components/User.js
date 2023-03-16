import React from "react";
import "./User.css";

const User = (props) => {
  return (
      <div className="user">
        <div className="listContainer">
          <img src={`${props.imageUrl}?v=${props.id}`} alt={`${props.name} ${props.lastName}`} />
          <div className="description">
            <strong>{`${props.prefix} ${props.name} ${props.lastName}`}</strong>
          </div>
          <div className="description">{props.title}</div>
        </div>
      </div>
  );
};

export default User;
