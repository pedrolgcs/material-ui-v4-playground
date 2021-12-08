import { makeStyles, createStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      borderRadius: '8px',
    },
    textField: {
      width: '100%',
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
  })
);
