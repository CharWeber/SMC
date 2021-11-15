import React from 'react';
import StatusUpdate from './StatusUpdate';
import FriendUpdate from './FriendUpdate';

function Feed(){
  return(
    <React.Fragment>
      <StatusUpdate />
      <FriendUpdate />
    </React.Fragment>
  );
}

export default Feed;