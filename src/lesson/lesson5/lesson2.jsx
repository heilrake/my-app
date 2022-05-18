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

const Lesson2 = () => {  
  const classes = useStyles();

  const [names, setNames] = useState(['Коля', 'Вася', "Петя"]);

  const addElement = () => {
    const copyNames = [...names];

    copyNames.push('пункт');

    setNames(copyNames);
  }


  return (
    <div>
      <ul className={classes.root}>
        {names.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
      <button onClick={addElement}>Add</button>
    </div>
  );
}
export default Lesson2;
