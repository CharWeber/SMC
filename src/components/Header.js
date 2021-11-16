import React from 'react';
import Links from './Links.js';
import Searchbar from './Searchbar.js';
import Tweet from './Tweet.js';

function Header(){
  return(
    <React.Fragment>
      <p>
        <div class="navbar">
            <Links />
            <Searchbar />
            <Tweet />
        </div>    
      </p>
    </React.Fragment>
  );
}

export default Header;

{/* <nav class="nav">
  <a class="nav-link active" href="#">Active</a>
  <a class="nav-link" href="#">Link</a>
  <a class="nav-link" href="#">Link</a>
  <a class="nav-link disabled" href="#">Disabled</a>
</nav> */}