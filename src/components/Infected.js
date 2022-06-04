import React from 'react';

const Infected = (props) => {
  const { infected } = props;
  return (
    <div>
      <div>
        {infected.name} ({infected.ability})
      </div>
    </div>
  );
};

export default Infected;