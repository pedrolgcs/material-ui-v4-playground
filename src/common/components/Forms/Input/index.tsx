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
  /**
   * Add icon at the end of the input
   */
  actionIcon?: React.ReactElement;
  /**
   * function to call when the icon is clicked
   */
  onClickActionIcon?: () => void;
  /**
   * Add icon at the start of the input
   */
  icon?: React.ReactNode;
};

/**
 * TextInput
 * 
 * @param {InputProps}
 * @returns {React.ReactElement<InputProps>} TextInput
 */
function TextInput({
  actionIcon: ActionIcon,
  icon: Icon,
  onClickActionIcon,
  ...props
}: InputProps): React.ReactElement<InputProps> {
  const classes = useStyles();

  function startAdornment() {
    if (!!Icon) {
      return <InputAdornment position="start">{Icon}</InputAdornment>;
    } else {
      return null;
    }
  }

  function endAdornment() {
    if (!!ActionIcon) {
      return (
        <InputAdornment position="end">
          <IconButton onClick={onClickActionIcon}>{ActionIcon}</IconButton>
        </InputAdornment>
      );
    } else {
      return null;
    }
  }

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

export { TextInput };
