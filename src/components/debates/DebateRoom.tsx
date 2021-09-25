import React, { useContext, useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import DebateContext from "../../contexts/DebateProvider";
import { Debate } from "../../types";
import SubNavbar from "../general/SubNavbar";
import DebateMap from "./DebateMap";

interface MatchParams {
  id: string;
}

interface PropTypes extends RouteComponentProps<MatchParams> {}

const DebateRoom = ({ match }: PropTypes) => {
  const { debates } = useContext(DebateContext);
  const [debate, setDebate] = useState<Debate | null>();

  useEffect(() => {
    if (!debate) setDebate(
      debates.find((debate) => debate.id === +match.params.id)
    );
  }, [debates, debate, match.params]);

  return (
    <>
      <SubNavbar />
      {debate && <DebateMap debate={debate} />}
    </>
  );
};

export default DebateRoom;
