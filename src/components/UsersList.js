import React from "react";
import User from "./User";
import "./UsersList.css";

const UsersList = (props) => {
  
  const onClickHandler = () => {};

  return (
    <div className="list">
      {props.users.map((user) => (
        <User
          onClick={onClickHandler}
          key={user.id}
          id={user.id}
          name={user.name}
          lastName={user.lastName}
          prefix={user.prefix}
          title={user.title}
          imageUrl={user.imageUrl}
        />
      ))}
    </div>
  );
};

export default UsersList;
