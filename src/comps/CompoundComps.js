import React, { useState } from 'react';

const Checkbox = ({ children }) => {
  const [checked, setChecked] = useState(true);
  const allChildren = React.Children.map(children, child => {
    const clone = React.cloneElement(child, {
      checked,
      setChecked
    });

    return clone;
  });

  return allChildren;
};

const CheckboxInput = ({ checked, setChecked }) => {
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

const Label = ({ setChecked, children }) => {
  return <label onClick={() => setChecked()}>{children}</label>;
};

const CompoundComps = () => {
  return (
    <Checkbox>
      <CheckboxInput />
      <Label>Checkbox Label</Label>
    </Checkbox>
  );
};

export default CompoundComps;
