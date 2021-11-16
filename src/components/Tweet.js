import React from 'react';
import AddTweet from './AddTweet';

function Tweet(){
  return(
    <React.Fragment>
      <p>
        <span class="nav-link"><span>Tweet</span></span>
        <span class="nav-link"><AddTweet/></span>
      </p>
    </React.Fragment>
  );
}

export default Tweet;