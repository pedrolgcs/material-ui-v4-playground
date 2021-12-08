import { makeStyles, createStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      height: '100%',
      borderRadius: '8px',
      padding: '11.5px 14px',
      border: '1px solid #CACACA',

      '& .MuiInput-underline:before': {
        borderBottom: 'none',
      },

      '& .MuiInput-underline:after': {
        borderBottom: 'none',
      },
      
      '& .MuiInput-underline:hover:before': {
        borderBottom: 'none',
      },
    },
  })
);
