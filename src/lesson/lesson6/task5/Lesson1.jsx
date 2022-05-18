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
  const [isShow, setIsShow] = useState(false);

  const Submit = (event) => {
    setIsShow(true);
    event.preventDefault();
  }



  return (
    <div className={classes.root}>
      <form onSubmit={Submit}>
        <input type="text" name="name" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <button type="submit" value="Отправить"  >click</button>
      </form>
      {isShow && <p>{inputValue}</p>}
    </div>
  );
}
export default Lesson1;
