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
  const [userNames, setUserNames] = useState(['bob', 'nick', 'alice'])
  const [isShow, setIsShow] = useState(false);

  const Submit = (event) => {
    setIsShow(true);

    const copyNames = [...userNames];
    copyNames.push(inputValue)

    setUserNames(copyNames);

    event.preventDefault();
  }

  const list = userNames.map((item, index) => {
    return <li key={index}>{item}</li>
  })

  return (
    <div className={classes.root}>
      {list} <br />
      <form onSubmit={Submit}>
        <input type="text" name="name" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <button type="submit" value="Добавить"> Add </button>
      </form>
    </div>
  );
}
export default Lesson1;
