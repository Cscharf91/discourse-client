import { Debate } from "../../types/types";

interface PropTypes {
  debate: Debate;
}

const DebateMap = ({ debate }: PropTypes) => {
  return (
    <div>
      <h3>{debate.topic}</h3>
      <p>Submitted by: {debate.username}</p>
      <p>Position: {debate.creator_position}</p>
      <p>Opening: {debate.creator_opening}</p>
      <p>Length: {debate.days}</p>
    </div>
  );
};

export default DebateMap;
