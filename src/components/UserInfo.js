import React from 'react';
import Profile from './Profile';
import About from './About';

function UserInfo(){
  return(
    <React.Fragment>
      <p>
        <span>UserInfo</span>
        <Profile />
        <About />
      </p>
    </React.Fragment>
  );
}

export default UserInfo;