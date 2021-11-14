import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

export const App = () => {
  const [display, setDisplay] = useState(true);
  console.log(display);
  const visible = ['Display', 'DisplayOF'];
  return (
    <>
      <h1 id="title" className="title">
        oishdg+asdh+fhdgsnd+gh
      </h1>
      <Button data-testid="custom" onClick={() => setDisplay(!display)}>
        {display ? visible[1] : visible[0]}
      </Button>
      {display && <h1>mini test</h1>}
    </>
  );
};
