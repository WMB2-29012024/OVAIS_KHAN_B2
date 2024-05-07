import React from "react";

const UserVotingStatus = ({ age }) => {
  return (
    <div>{age===18 ? <p>You can Vote</p> : <p>You can not Vote.</p>}</div>
  );
};
export default UserVotingStatus;
