import { makeStyles, createStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    titleContainer: {
      padding: '12px 24px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },

    title: {
      color: '#333333',
      fontSize: '26px',
      fontWeight: 'bold',
    },

    closeModal: {
      cursor: 'pointer',
      width: '36px',
      height: '36px',
      color: '#192748',
    },
  })
);
