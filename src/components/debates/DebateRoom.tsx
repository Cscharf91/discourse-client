import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { useStore } from "../../stores/useStore";
import { Debate } from "../../types/types";
import SubNavbar from "../general/SubNavbar";
import DebateMap from "./DebateMap";

interface MatchParams {
  id: string;
}

interface PropTypes extends RouteComponentProps<MatchParams> {}

const DebateRoom = ({ match }: PropTypes) => {
  const debateSlice = useStore((state) => state.debateSlice);
  const { debates } = debateSlice;
  const [debate, setDebate] = useState<Debate | null>();

  useEffect(() => {
    if (!debate)
      setDebate(debates.find((debate) => debate.id === +match.params.id));
  }, [debates, debate, match.params]);

  return (
    <>
      <SubNavbar />
      {debate && <DebateMap debate={debate} />}
    </>
  );
};

export default DebateRoom;
