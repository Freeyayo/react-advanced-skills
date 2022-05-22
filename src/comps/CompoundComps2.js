import React, { useState } from 'react';

const Cuz = () => <div>Cuz</div>;

const Checkbox = ({ children }) => {
  const [checked, setChecked] = useState(true);
  // * Children are probably DOM elements, functions, classes, null
  const allChildren = React.Children.map(children, child => {
    // if (typeof child.type === 'string') {
    //   return null;

    // throw new Error(`
    //   DOM element <${child.type}> is not allowed
    // `);
    // }

    console.log(child);

    if (!whiteList.includes(child.type)) {
      // * create whitelist
      throw new Error(`
        custom element is not supported
      `);
    }

    if (typeof child.type !== 'function') {
      // * This is not our element to be messed around
      return child;
    }
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

const whiteList = [Label, CheckboxInput];

const CompoundComps2 = () => {
  return (
    <Checkbox>
      <Label>Checkbox Label</Label>
      {/* <Cuz /> */}
      <CheckboxInput />
    </Checkbox>
  );
};

export default CompoundComps2;
