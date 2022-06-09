import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    margin: '50px 0px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },

  mainInfo: {
    display: 'flex',
    flexDirection: 'column',
    margin: '10px',
  },

  buttonGroup: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
  },

  checkTask: {
    '&.noactive': {
      textDecoration: 'line-through',
    },
  },

  info: {
    display: 'flex',
    flexDirection: 'column',
    margin: '20px 0',
  },

  deleteButton: {
    "& > button": {
      backgroundColor: 'red',

      "&:hover": {
        background: '#AB0404'
      },
    },
  },

});
export default useStyles;
