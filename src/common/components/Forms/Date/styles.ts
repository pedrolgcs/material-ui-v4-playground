import { makeStyles, createStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      height: '100%',
      borderRadius: '8px',
      padding: '11.5px 14px',
      border: '1px solid #CACACA',

      '&:hover': {
        border: '1px solid #333333',
      },
    },
  })
);
