import { makeStyles, createStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      color: '#333333',
      fontSize: '26px',
      lineHeight: '26px',
      fontWeight: 'bold',
      textAlign: 'center',
    },

    closeModal: {
      position: 'absolute',
      cursor: 'pointer',
      backgroundColor: '#DDDDDD',
      boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.16)',
      width: 40,
      height: 40,
      top: -17,
      right: -17,
      borderRadius: '50%',

      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  })
);
