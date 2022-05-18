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

  const [inputValue, setInputValue] = useState('');
  const [lastName, setLastName] = useState('');
  const [firtstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');



  const getInformation = () => {
    const arr = inputValue.split(' ');
    setLastName(arr[0]);
    setFirstName([arr[1]])
    setSecondName([arr[2]])

    console.log(arr);
  }

  return (
    <div>
      <div className={classes.root}>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <button onClick={getInformation}>Try</button>
        <p>{lastName}</p>
        <p>{firtstName}</p>
        <p>{secondName}</p>
      </div>
    </div>
  );
}
export default Lesson1;
