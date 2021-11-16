import React from "react";
import AddFriend from "./AddFriend";
import UserInfo from "./UserInfo";
import Feed from "./Feed";

function Body(){
  return (
    <React.Fragment>
      <div class="row">
        <div class="col-4">
          <div class="card">
            <UserInfo />
          </div>
        </div>
        <div class="col-4">
          <div class="card">
            <Feed />
          </div>
        </div>
        <div class="col-4">
          <div class="card">
            <AddFriend />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Body;