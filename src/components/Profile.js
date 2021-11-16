import React from "react";

function Profile(){
  return(
    <React.Fragment>
      <h2>Profile's Name</h2>
      <btn class='btn-dark'>Following</btn> ||| 
      <btn class='btn-dark'>Followers</btn> ||| 
      <btn class='btn-dark'>Tweets</btn>
    </React.Fragment>
  );
}

export default Profile;