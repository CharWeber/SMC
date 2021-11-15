import React from 'react';
import Links from './Links.js';
import Searchbar from './Searchbar.js';
import Tweet from './Tweet.js';

function Header(){
  return(
    <React.Fragment>
      <Links />
      <Searchbar />
      <Tweet />
    </React.Fragment>
  );
}

export default Header;