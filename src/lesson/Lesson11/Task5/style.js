import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    margin: '30px 0px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    fontSize: '24px',

    "& .noRight ": {
      color: 'red',
    },

    "& .right": {
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

  Result: {
    display: 'flex',
    margin: '25px 0px',
  },

  AnswersResult: {
    margin: '0px 40px ',
  }
});

export default useStyles;
