import React, { useState, useReducer } from 'react';

function reducer({ state }) {
  switch (state) {
    case 'PRESS_ONCE':
      return {
        state: 'PRESS_TWICE'
      };
    case 'PRESS_TWICE':
      return {
        state: 'PRESS_THIRD'
      };
    case 'PRESS_THIRD':
      return {
        state: 'PRESS_ONCE'
      };
  }
}

const Button = props => {
  const [counter, setCounter] = useState(0);

  const [state, dispatch] = useReducer(reducer, {
    state: 'PRESS_ONCE'
  });

  return (
    <div>
      <button onClick={() => dispatch()}>I am a button</button>
      <div>{state.state}</div>
    </div>
  );
};

const StateMachine = () => {
  const commonProps = {
    color: 'red'
  };

  return (
    <div>
      <Button {...commonProps} />
      <Button {...commonProps} />
      <Button {...commonProps} />
    </div>
  );
};

export default StateMachine;
