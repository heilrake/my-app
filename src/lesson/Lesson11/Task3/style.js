import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    margin: '50px 0px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    fontSize: '24px',

    "& .red ": {
      color: 'red',
    },
    "& .green": {
      color: 'green',
    },

  },
});

export default useStyles;
