import React, { useState } from 'react';
// import CommonProps from './comps/CommonProps';
// import StateMachine from './comps/StateMachine';
// import StateMachine2 from './comps/StateMachine2';
// import CompoundComps from './comps/CompoundComps'
import CompoundComps2 from './comps/CompoundComps2'

import './style.css';

export default function App() {
  const commonProps = {
    color: 'red',
    increment: 2
  };
  return (
    <div>
      <CompoundComps2 />
    </div>
  );
}
