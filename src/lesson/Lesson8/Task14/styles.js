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

    '& > form ': {
      display: 'flex',
      flexDirection: "column",
      gap: '5px',
      margin: '50px 0px'
    },
    "&.TextField": {
      margin: '0px 5px'
    },

  },
});

export default useStyles;
