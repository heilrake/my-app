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

  const [lastName, setLastName] = useState('');
  const [firtstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');

  const [resultValue, setResultValue] = useState('')
  const [isShow, setIsShow] = useState(false);

  const Submit = (event) => {
    setIsShow(true);

    const result = lastName + ' ' + firtstName + ' ' + secondName;

    setResultValue(result);

    event.preventDefault();
  }



  return (
    <div className={classes.root}>
      <form onSubmit={Submit}>
        <input type="text" name="name" value={lastName} onChange={(e) => setLastName(e.target.value)} /> <br />
        <input type="text" name="name" value={firtstName} onChange={(e) => setFirstName(e.target.value)} /><br />
        <input type="text" name="name" value={secondName} onChange={(e) => setSecondName(e.target.value)} />


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
