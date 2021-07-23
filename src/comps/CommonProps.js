import React, { useState } from 'react';

const Button = props => {
  const [counter, setCounter] = useState(0);
  const { color, increment } = props;
  return (
    <div style={{color}} onClick={() => setCounter(c => c + increment)}>I am a button {counter}</div>
  );
};

const CommonProps = () => {
  const commonProps = {
    color: 'red',
    increment: 2,
  }
  return (
    <div>
      <Button {...commonProps}/>
      <Button {...commonProps}/>
      <Button {...commonProps}/>
    </div>
  )
}

export default CommonProps;