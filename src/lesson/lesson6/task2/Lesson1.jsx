import { useState } from 'react';

import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {
    margin: '100px 0px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    fontSize: '24px',
  }
});

const Lesson1 = () => {
  const classes = useStyles();

  const [inputValue, setInputValue] = useState('')



  return (
    <div>
      <div className={classes.root}>
        <input type="number" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <p>{inputValue.toUpperCase()}</p>
      </div>
    </div>
  );
}
export default Lesson1;
