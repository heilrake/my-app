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

  const [inputValue, setiInputValue] = useState();
  const [users, setUsers] = useState(['bob', 'nick', 'jonh', 'silvia']);

  const deleteElement = (event) => {
    const copyUsers = [...users];

    copyUsers.splice(inputValue - 1, 1)

    setUsers(copyUsers);

    event.preventDefault();
  }

  const handleInput = (event) => {
    setiInputValue(event.target.value);
  }

  const list = users.map((item, index) => {
    return <ul key={index}> <li>{index} {item} </li> </ul >
  })//TODO in jsx

  return (
    <div className={classes.root}>
      <form onSubmit={deleteElement}>
        <input type='number' value={inputValue} onChange={handleInput} />
        <button type="submit" value="Удалить" > delete </button>
      </form>
      {list}
    </div>
  );
}
export default Lesson1;
