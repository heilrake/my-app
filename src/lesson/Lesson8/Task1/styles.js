import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    marginTop: '50px',
    width: '150px',
    margin: '0 auto',
  },
  li: {
    "&.noactive": {
      textDecoration: 'line-through',
    }
  },
  typography: {
    "&.red": {
      color: 'red'
    },
    "&.blue": {
      color: 'blue'
    },
    "&.green": {
      color: 'green'
    },
    "&.grey": {
      color: 'grey'
    }
  }
});

export default useStyles;
