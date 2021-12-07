import { makeStyles, createStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    titleContainer: {
      height: '60px',
      padding: '0 24px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },

    title: {
      color: '#333333',
      fontSize: '26px',
      fontWeight: 'bold',
    },

    closeContainer: {
      display: 'flex',
      alignContent: 'center',
    },

    closeButton: {
      cursor: 'pointer',
      width: '36px',
      height: '36px',
      color: '#192748',
    },

    relativeCloseButtonContainer: {
      height: '40px',

      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },

    absoluteCloseButton: {
      marginRight: '24px',
      cursor: 'pointer',
      width: '36px',
      height: '36px',
      color: '#192748',
    },
  })
);
