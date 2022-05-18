import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    margin: '100px 0px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    fontSize: '24px',

    "& .correct": {
      color: 'green',
    },

    "& .false": {
      color: 'red',
    },

    "& .default": {
      color: 'inherit',
    },
  },
});

export default useStyles;
