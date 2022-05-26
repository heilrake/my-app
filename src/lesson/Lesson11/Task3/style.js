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

  ArrowButtons: {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
  },

  ButtonArrow: {
    width: '55px',
    height: '55px',
    marginBottom: '20px',
  },

  IconArrow: {
    fontSize: '28px',
  },
});

export default useStyles;
