import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    padding: '30px 0px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    overflowY: 'hidden',
    fontSize: '24px',
    backgroundColor: 'brown',
  },
});

export default useStyles;
