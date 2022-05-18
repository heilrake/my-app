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

  const getYears = () => {
    let today = new Date(); // Mon Nov 23 2020 15:23:46 GMT+0300 (Москва, стандартное время)
    let year = today.getFullYear(); // 2020
    console.log(year - inputValue)//TODO remove log
    const result = year - inputValue;

    setInputValue(result)
  }

  return (
    <div>
      <div className={classes.root}>
        <input type="number" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <button onClick={getYears}>Try</button>
        <p>{inputValue}</p>
      </div>
    </div>
  );
}
export default Lesson1;
