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

  const [inputValue, setiInputValue] = useState({ text: '', href: '' })
  const [hrefLink, setHrefLink] = useState([
    { href: '1.html', text: 'ссылка 1' },
    { href: '2.html', text: 'ссылка 2' },
    { href: '3.html', text: 'ссылка 3' },
  ])

  const addElement = (event) => {
    if (inputValue.href !== '' && inputValue.text !== '') {
      const copyNames = [...hrefLink];

      copyNames.push(inputValue);

      setHrefLink(copyNames);
    }

    const copyInputValue = { ...inputValue }

    copyInputValue.text = ''
    copyInputValue.href = ''

    setiInputValue(copyInputValue)

    event.preventDefault();
  }

  const handleInput = ({ target: { name, value } }) => {

    setiInputValue((prevState) => ({ ...prevState, [name]: value }))
  }

  const list = hrefLink.map((item, index) => {
    return <li key={index}><a href={item.href}>{item.text}</a></li>
  })

  return (
    <div className={classes.root}>
      {list}
      <br />
      <form onSubmit={addElement}>
        <input placeholder='text' name="text" value={inputValue.text} onChange={handleInput} />
        <input placeholder='href' name="href" value={inputValue.href} onChange={handleInput} />
        <button type="submit" value="Добавить" > Add </button>
      </form>
    </div>
  );
}
export default Lesson1;
