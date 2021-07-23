import React, { useEffect, useState } from 'react';

/**
 * idle
 * loading
 * loaded
 * error
 */

const StateMachine2 = () => {
  const [state, setState] = useState('idle');
  const [data, setData] = useState('');

  useEffect(() => {
    setState('loading');
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(data => data.json())
      .then(json => {
        try {
          setData(JSON.stringify(json));
          setState('loaded');
        } catch (e) {
          setState(`error: ${e}`);
        }
      })
      .catch(e => {
        setState('network-error');
      });
  }, []);

  if (state === 'loading') {
    return <>Loading Page</>;
  }

  return (
    <div>
      <div>Current State: {state}</div>
      <div>{data ? `data: ${data}` : null}</div>
    </div>
  );
};

export default StateMachine2;
