import { useState } from 'react';
import { useState } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {
    margin:'100px 0px',
    display:'flex',
    justifyContent:'center',
    flexDirection:'column',
    alignItems:'center',
    height:'100%',
    fontSize: '24px',
  }
});

const Lesson3 = () => {  
  const classes = useStyles();

  const [names, setNames] = useState(['Коля', 'Вася', "Петя"]);

  const deletedElement = () => {
    const copyNames = [...names];

    copyNames.pop();

    setNames(copyNames);
  }


  return (
    <div>
      <ul className={classes.root}>
        {names.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
      <button onClick={deletedElement}>deleted</button>
    </div>
  );
}
export default Lesson3;
