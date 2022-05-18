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

    "& .red": {
      "& .MuiOutlinedInput-root": {

        "& > fieldset": {
          borderColor: 'red',
        }
      },
    },

    "& .green": {
      "& .MuiOutlinedInput-root": {

        "& > fieldset": {
          borderColor: 'green',
        }
      },
    }
  },
});

export default useStyles;
