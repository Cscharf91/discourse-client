import React, { useContext } from 'react';
import DebateContext from '../../contexts/DebateProvider';
import DebateMap from './Debate';

const Debates = () => {
  const { debates } = useContext(DebateContext);

  return (
    <div className="page-wrapper">
      <h1>Debates</h1>
      {debates.map(debate => {
        return (
        <DebateMap key={debate.id} debate={debate} />
      )})}
    </div>
  )
}

export default Debates;
