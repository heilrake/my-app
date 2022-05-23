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
  },

  tableSection: {
    "&.MuiOutlinedInput-root": {
      margin: "15px 0px",
    },

    "&.MuiTable-root ": {
      width: 'fit-content',
      margin: '0px auto',
      "&.MuiTableCell-root ": {
        textAlign: 'center',
      },
    },
    "& > form ": {
      display: "flex",
      flexDirection: "column",
      gap: '10px',
    },
  },
});
export default useStyles;
