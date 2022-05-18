import { createUseStyles } from 'react-jss'
const Styles = createUseStyles({
  ulList: {
    margin: '100px 0px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    fontSize: '24px',
  }
})

// TODO useStyles and classes

const name = ['Коля', 'Вася', "Петя"]
const list = name.map((item, index) => {
  return <li key={index}>{item}</li>
})
const Lesson1 = () => {
  const styles = Styles()
  return (
    <ul className={styles.ulList}>{list}</ul>
  );
}
export default Lesson1;
