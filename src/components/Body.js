import React from "react";
import AddFriend from "./AddFriend";
import UserInfo from "./UserInfo";
import Feed from "./Feed";

function Body(){
  return (
    <React.Fragment>
      <div class="row">
        <div class="col-4">
          <UserInfo />
        </div>
        <div class="col-4">
          <Feed />
        </div>
        <div class="col-4">
          <AddFriend />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Body;