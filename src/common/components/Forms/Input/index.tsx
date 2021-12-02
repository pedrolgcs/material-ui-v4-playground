import { TextField, TextFieldProps } from '@material-ui/core';

// styles
import { useStyles } from './styles';

type InputProps = TextFieldProps & {};

function Input({ ...rest }: InputProps) {
  const classes = useStyles();

  return (
    <TextField
      margin="normal"
      className={classes.root}
      {...rest}
    />
  );
}

export { Input };
