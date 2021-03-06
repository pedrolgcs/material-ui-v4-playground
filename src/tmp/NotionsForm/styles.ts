import { makeStyles, createStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: '100%',

      [theme.breakpoints.up('md')]: {
        minWidth: '870px',
      },
    },

    formContainer: {
      gap: '15px',
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
        backgroundColor: '#7DCC6C',
      },
    },

    line: {
      height: '1px',
      width: '100%',
      background: 'rgba(0, 0, 0, 0.2)',
      margin: '20px 0 15px',
    },

    filtersContainer: {
      margin: '20px 0 10px',

      display: 'flex',
      alignItems: 'center',
      gap: '20px',
    },

    filtersIcon: {
      width: '35px',
      height: '35px',
    },

    filtersLabel: {
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: 'bold',
      color: '#333333',
    },

    historyList: {
      listStyleType: 'none',
      padding: '0',

      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '10px',
    },

    historyItem: {
      width: '100%',
      padding: '28px 25px',
      border: '1px solid #CACACA',
      borderRadius: '8px',
      gap: '18px',

      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },

    historyItemIcon: {
      width: '25px',
      height: '25px',
    },

    historyItemDate: {
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: 'bold',
    },

    historyItemText: {
      fontSize: '14px',
      lineHeight: '21px',
      fontWeight: 'normal',
      color: '#333333',
    },

    footerContainer: {
      width: '180px',
      margin: '10px 0',
      cursor: 'pointer',
      fontWeight: 'bold',
      color: '#237FD0',
      marginLeft: 'auto',

      display: 'flex',
      alignItems: 'center',
      gap: '10px',
    },
  })
);
