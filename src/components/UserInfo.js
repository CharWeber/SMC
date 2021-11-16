import React from 'react';
import Profile from './Profile';
import About from './About';

function UserInfo(){
  return(
    <React.Fragment>
      <p>
        <Profile />
        <About />
      </p>
    </React.Fragment>
  );
}

export default UserInfo;