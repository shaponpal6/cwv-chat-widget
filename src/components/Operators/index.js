import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { AppContext } from '../../store';
import Avater from '../../components/Avatar';
// import './style.css';
import { jsx, css, Global, ClassNames } from '@emotion/core'
import converted from './style.js';

const Operators = ({ operators }) => {
  const [state] = useContext(AppContext);
  const operatorCollapse = state.wheelState === 'down' ? 'cwv-operatorCollapse' : '';
  console.log('operatorCollapse>>', operatorCollapse)
  return (
    <>
    <Global styles={converted}/>
    <div className={"cwv-operators " + operatorCollapse}>
      <h2 className="cwv-operatorTitle">CWV Chat</h2>
      <h4 className="cwv-operatorDesc">We help your business grow by connecting you to your customers.</h4>
      <div className="cwv-operatorsWraper">
        <div className="cwv-avaters">
          {operators.map((operator) => {
            return (
              <Avater
                myClassName="cwv-avatersOverflow"
                key={Math.floor(Math.random() * 999)}
                name={operator.name}
                avatar={operator.avatar || ''}
              />
            );
          })}
        </div>
        <div className="cwv-preChatText">
          <h3 className="cwv-operatorName">Start Conversation</h3>
          <h3 className="cwv-operatorTitleAlt">CWV Chat</h3>
          <h4><time>A few minutes</time></h4>
        </div>
      </div>
    </div>
    </>
  );
};

Operators.propTypes = {
  operators: PropTypes.array.isRequired,
};

export default Operators;
