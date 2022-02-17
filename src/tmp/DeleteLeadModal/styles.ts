import { makeStyles, createStyles } from '@material-ui/core';

export const useStyles = makeStyles(() =>
  createStyles({
    description: {
      fontSize: '14px',
      lineHeight: '21px',
      fontWeight: 400,
      color: '#333333',
    },

    text: {
      fontSize: '14px',
      lineHeight: '21px',
      fontWeight: 400,
      color: '#333333',
      margin: '20px 0',
    },

    buttonsContainer: {
      display: 'flex',
      '& button': {
        '& + button': {
          marginLeft: '10px',
        },
      },
    },

    button: {
      cursor: 'pointer',
      borderRadius: '16px',
      border: 'none',
      color: '#fff',
      background: '#175F9F',
      padding: '8px 16px',
      fontWeight: 'bold',
    },

    buttonOutlined: {
      cursor: 'pointer',
      borderRadius: '16px',
      color: '#333333',
      background: '#ffffff',
      padding: '8px 16px',
      border: '1px solid #dddddd',
      fontWeight: 'bold',
    },

    actionButton: {
      padding: '10px 38px',
      fontSize: '14px',
      background: '#263C70',
    },

    actionButtonOutlined: {
      padding: '10px 38px',
      fontSize: '14px',
    },

    buttonsActionContainerContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
    },
  })
);
