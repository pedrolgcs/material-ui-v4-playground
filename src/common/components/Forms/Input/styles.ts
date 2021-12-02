import { makeStyles, createStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiOutlinedInput-root': {
        borderRadius: '8px',
      },
    },
  })
);
