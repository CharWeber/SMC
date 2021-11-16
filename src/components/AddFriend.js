import React from 'react';
import PotentialFriend from './PotentialFriend';

const FriendSuggestionList = [
  {friendName: 'John Cena'},
  {friendName: 'John Johnson'},
  {friendName: 'Johnny Johan'},
  {friendName: 'Jim Johnny'}
]

function AddFriend(){
  return (
    <React.Fragment>
    {FriendSuggestionList.map((potentialFriend, index) =>
      <PotentialFriend friendName={potentialFriend.friendName}
      key={index}/>
      )}
      </React.Fragment>
  );
}
export default AddFriend;