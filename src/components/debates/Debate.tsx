import React from "react";
import { Debate } from "../../types";

interface PropTypes {
  debate: Debate;
}

const DebateMap = ({ debate }: PropTypes) => {
  return (
    <div>
      <h3>{debate.topic}</h3>
      <p>Debate Ends: {debate.debate_end}</p>
      <p>Voting Ends: {debate.voting_end}</p>
      <p>Submitted by: {debate.username}</p>
      <p>Position: {debate.creator_position}</p>
    </div>
  );
};

export default DebateMap;
