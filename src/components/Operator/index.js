import React from 'react';
import PropTypes from 'prop-types';
import Avater from '../../components/Avatar';
import './style.css';

const Operator = ({ operators }) => {
  return (
    <div className="cwv-operators">
      <div className="cwv-avaters">
        {operators.map((operator) => {
          return (
            <Avater
              key={Math.floor(Math.random() * 999)}
              name={operator.name}
              avatar={operator.avatar || ''}
            />
          );
        })}
      </div>
      <div className="cwv-preChatText">
        Start Conversation
      </div>
    </div>
  );
};

Operator.propTypes = {
  operators: PropTypes.array.isRequired,
};

export default Operator;
