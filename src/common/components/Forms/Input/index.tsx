import * as React from 'react';
import {
  TextField,
  TextFieldProps,
  IconButton,
  InputAdornment,
} from '@material-ui/core';

// styles
import { useStyles } from './styles';

// TODO criar um tipo para os icones
type InputProps = TextFieldProps & {
  right?: React.ReactElement;
  onClickRight?: (data: unknown) => void;
  left?: React.ReactNode;
};

function Input({
  right: RightIcon,
  left: LeftIcon,
  onClickRight,
  ...props
}: InputProps) {
  const classes = useStyles();

  const startAdornment = () => {
    if (LeftIcon) {
      return <InputAdornment position="start">{LeftIcon}</InputAdornment>;
    } else {
      return null;
    }
  };

  const endAdornment = () => {
    if (RightIcon) {
      return (
        <InputAdornment position="end">
          <IconButton onClick={onClickRight}>{RightIcon}</IconButton>
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
