import React, { useState, createContext, useContext } from 'react';

// * Using context to propagate the state
const CheckBoxContext = createContext(null);

const Checkbox = ({ children }) => {
  const [checked, setChecked] = useState(true);

  return (
    <CheckBoxContext.Provider
      value={{
        checked,
        setChecked
      }}
    >
      {children}
    </CheckBoxContext.Provider>
  );
};

const CheckboxInput = () => {
  const context = useContext(CheckBoxContext);
  const { checked, setChecked } = context;
  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={e => {
        setChecked(e.target.checked);
      }}
    />
  );
};

const Label = ({ children }) => {
  const context = useContext(CheckBoxContext);
  const { setChecked } = context;
  return <label onClick={() => setChecked()}>{children}</label>;
};

const whiteList = [Label, CheckboxInput];

const CompoundComps3 = () => {
  return (
    <Checkbox>
      <Label>Checkbox Label</Label>
      {/* With using context, no need to worry about nested component */}
      <div>
        <CheckboxInput />
      </div>
    </Checkbox>
  );
};

export default CompoundComps3;
