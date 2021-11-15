import React from "react";
import PotentialFriend from "./PotentialFriend";
const FriendSuggestionList = [
  {friendName: 'John Cena'}
]
function StatusUpdate(){
  return(
    <React.Fragment>
      <hr/>
    {FriendSuggestionList.map((potentialFriend, index) =>
      <PotentialFriend friendName={potentialFriend.friendName}
      key={index}/>
      )}
      </React.Fragment>
  );
}

export default StatusUpdate;