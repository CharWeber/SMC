import React from 'react';
import AddTweet from './AddTweet';

function Tweet(){
  return(
    <React.Fragment>
      <p>
        <span>Tweet</span>
        <AddTweet/>
      </p>
    </React.Fragment>
  );
}

export default Tweet;