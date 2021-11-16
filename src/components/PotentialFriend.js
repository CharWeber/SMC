import React from "react";
import PropTypes from "prop-types";

function PotentialFriend(props){
  return(
    <div>
      <p>Is this your friend?</p>
      <p>{props.friendName}</p>
    </div>
  );
}

PotentialFriend.propTypes = {
  friendName: PropTypes.string.isRequired
}

export default PotentialFriend;