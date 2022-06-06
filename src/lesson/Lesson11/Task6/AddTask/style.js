import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    border: '2px solid black',
    borderRadius: '20px',
    padding: '10px',
    color: 'white',
    width: '520px',
  },

  title: {
    fontSize: '26px',
    fontWeight: '700',
    lineHeight: '28px',
  },

  formSection: {
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',

    "& > button": {
      backgroundColor: 'black',

      "&:hover": {
        background: 'gray'
      },
    },

    "& > input :after": {
      borderBottom: '2px solid black',
    },
  }
});

export default useStyles;
