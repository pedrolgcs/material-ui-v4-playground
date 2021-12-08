import { makeStyles, createStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',

      '& fieldset': {
        borderRadius: '8px',
      },
    },
  })
);
