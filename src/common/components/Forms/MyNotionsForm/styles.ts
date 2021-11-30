import { makeStyles, createStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: '100%',
      minWidth: '870px',
    },

    formContainer: {
      display: 'flex',
      flexDirection: 'column',
    },

    subTitle: {
      color: '#333',
      fontWeight: 'bolder',
      fontSize: '20px',
      lineHeight: '30px',
    },

    submitButton: {
      width: '200px',
      borderRadius: '8px',
      padding: '10px',
      backgroundColor: '#67C453',
      marginLeft: 'auto',
      margin: '10px 0 5px',

      '&:hover': {
        backgroundColor: '#67C413',
      }
    },

    line: {
      height: '1px',
      width: '100%',
      background: 'rgba(0, 0, 0, 0.2)',
      margin: '20px 0',
    }
  })
);
