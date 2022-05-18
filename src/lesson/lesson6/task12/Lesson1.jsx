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

    "& table": {
      borderCollapse: 'collapse',
      border: '2px solid rgb(200, 200, 200)',
      letterSpacing: '1px',
      fontSize: '16px',
    }
  },

  thead: {
    backgroundColor: '#3f87a6',
    color: '#fff',
  },

  tbody: {
    backgroundColor: '#e4f0f5',

    "& > tr > td": {
      border: '1px solid rgb(190, 190, 190)',
      padding: '5px 10px',
    }
  },
});

const Lesson1 = () => {
  const classes = useStyles();

  const [inputValue, setiInputValue] = useState({ name: '', age: '' });
  const [users, setUsers] = useState([
    { name: 'Коля', age: 30 },
    { name: 'Вася', age: 40 },
    { name: 'Петя', age: 50 },
  ]);

  const handleInput = ({ target: { name, value } }) => {
    setiInputValue((prevState) => ({ ...prevState, [name]: value }))
  }

  const addElement = (event) => {
    event.preventDefault();

    const copyNames = [...users];

    copyNames.push(inputValue);
    setUsers(copyNames);
    setiInputValue({ name: "", age: "" });
  }

  return (
    <div className={classes.root}>

      <table className={classes.table}>
        <thead className={classes.thead}>
          <tr>
            <th>Names</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody className={classes.tbody}>
          {users.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <form onSubmit={addElement}>
        <input
          placeholder='Name'
          name="name"
          value={inputValue.name}
          onChange={handleInput}
        />
        <input
          type="number"
          placeholder='Age'
          name="age"
          value={inputValue.age}
          onChange={handleInput}
        />
        <button type="submit" value="Добавить" disabled={!inputValue.name || !inputValue.age}>
          Add
        </button>
      </form>
    </div>
  );
}
export default Lesson1;
