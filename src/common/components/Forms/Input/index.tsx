import * as React from 'react';
import {
  TextField,
  TextFieldProps,
  IconButton,
  InputAdornment,
} from '@material-ui/core';

// styles
import { useStyles } from './styles';

type InputProps = TextFieldProps & {
  iconRight?: React.ReactElement;
  onClickIconRight?: () => void;
  iconLeft?: React.ReactNode;
};

function Input({
  iconRight: IconRight,
  iconLeft: IconLeft,
  onClickIconRight,
  ...props
}: InputProps) {
  const classes = useStyles();

  function startAdornment() {
    if (!!IconLeft) {
      return <InputAdornment position="start">{IconLeft}</InputAdornment>;
    } else {
      return null;
    }
  };

  function endAdornment() {
    if (!!IconRight) {
      return (
        <InputAdornment position="end">
          <IconButton onClick={onClickIconRight}>{IconRight}</IconButton>
        </InputAdornment>
      );
    } else {
      return null;
    }
  };

  return (
    <TextField
      className={classes.root}
      variant="outlined"
      InputProps={{
        startAdornment: startAdornment(),
        endAdornment: endAdornment(),
      }}
      {...props}
    />
  );
}

export { Input };
