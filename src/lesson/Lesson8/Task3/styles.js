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

    "& table": {
      borderCollapse: 'collapse',
      border: '2px solid rgb(200, 200, 200)',
      letterSpacing: '1px',
      fontSize: '16px',
    }
  },


});

export default useStyles;
