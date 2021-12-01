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
      margin: '20px 0',
    },

    filtersContainer: {
      margin: '20px 0',

      display: 'flex',
      alignItems: 'center',
      gap: '20px',
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
      borderBottom: '1px solid transparent',

      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      transition: 'all 0.3s ease-in-out',

      '&:hover': {
        borderBottom: '1px solid #237FD0',
      },
    },
  })
);
