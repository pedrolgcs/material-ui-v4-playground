import { makeStyles, createStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: '100vw',
      height: '100vh',

      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },

    title: {
      fontSize: '4rem',
      color: '#888',
    },

    wapper: {
      width: '1200px',
    },
  })
);
