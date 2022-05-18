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

  const [firstValue, setFirstValue] = useState('');
  const [secondValue, setSecondValue] = useState('');
  const [resultValue, setResultValue] = useState('');



  const [isShow, setIsShow] = useState(false);

  const Submit = (event) => {
    setIsShow(true);

    const result = Number(firstValue) + Number(secondValue);

    setResultValue(result);

    event.preventDefault();
  }

  // TODO Handle value one func and one state use classes or remove
  return (
    <div className={classes.root}>
      <form onSubmit={Submit}>
        <input type="number" name="name" value={firstValue} onChange={(e) => setFirstValue(e.target.value)} /> <br />
        <input type="number" name="name" value={secondValue} onChange={(e) => setSecondValue(e.target.value)} />
        <button type="submit" value="Отправить"  >click</button>
      </form>
      {
        isShow &&
        <p>{resultValue}</p>
      }

    </div>
  );
}
export default Lesson1;
