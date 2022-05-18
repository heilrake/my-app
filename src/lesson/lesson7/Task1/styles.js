import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    "& input": {
      color: 'red',
    }
  }
});

export default useStyles;
