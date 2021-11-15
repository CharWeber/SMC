import React from 'react';
import Links from './Links.js';
import Searchbar from './Searchbar.js';
import Tweet from './Tweet.js';

function Header(){
  return(
    <React.Fragment>
      <p>
      <span>
        <Links />
      </span>
      <span>
        <Searchbar />
      </span>
      <span>
        <Tweet />
      </span>
      </p>
    </React.Fragment>
  );
}

export default Header;