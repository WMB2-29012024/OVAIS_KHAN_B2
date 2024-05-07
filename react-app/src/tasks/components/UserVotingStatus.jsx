import React from "react";

const UserVotingStatus = ({ age }) => {
  return (
    <div>{age===18 ? <p>You can Vote</p> : <p>Your age is below 18. You can't vote now.</p>}</div>
  );
};
export default UserVotingStatus;
