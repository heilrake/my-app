import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    margin: '35px 0px',
    border: '2px solid black',
    borderRadius: '20px',
    padding: '10px',
    color: 'black',
    width: '520px',
    fontSize: '24px',
    fontWeight: '500',
  },

  task: {
    borderRadius: '20px',
    backgroundColor: 'white',
    padding: '10px',
    margin: '20px 0px',
    display: 'flex',
    flexDirection: 'column',

    "&.noactive": {
      textDecoration: 'line-through',
    }
  },

  title: {
    color: 'white',
    fontSize: '26px',
    fontWeight: '700',
  },

  editField: {
    padding: '5px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default useStyles;
