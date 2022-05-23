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


    "&.MuiTable-root ": {
      width: 'fit-content',
      margin: '0px auto',

      "&.MuiTableCell-root ": {
        textAlign: 'center',
      },
    },
  },

});

export default useStyles;
