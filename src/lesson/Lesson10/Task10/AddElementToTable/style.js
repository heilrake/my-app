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
  },

  formSection: {
    display: "flex",
    flexDirection: "column",
    gap: '10px',

    "& .red .MuiOutlinedInput-root > fieldset": {
      borderColor: 'red',
    },
  },
});
export default useStyles;
