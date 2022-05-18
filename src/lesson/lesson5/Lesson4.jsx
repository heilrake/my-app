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

const Lesson4 = () => {
  const classes = useStyles();

  const [names, setNames] = useState(['Коля', 'Вася', "Петя"]);

  const deletedElement = (index) => {
    const copyNames = [...names];

    copyNames.splice(index, 1);

    setNames(copyNames);
  }


  return (
    <div>
      <ul className={classes.root}>
        {names.map((item, index) => <li key={index}>{item} <button onClick={() => deletedElement(index)}>deleted</button> </li>)}
      </ul>
    </div>
  );
}
export default Lesson4;
