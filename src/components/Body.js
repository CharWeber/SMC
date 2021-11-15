import React from "react";
import AddFriend from "./AddFriend";
import UserInfo from "./UserInfo";
import Feed from "./Feed";
import AddFriend from "./AddFriend";

function Body(){
  return (
    <React.Fragment>
      <UserInfo />
      <Feed />
      <AddFriend />
    </React.Fragment>
  );
}

export default Body;