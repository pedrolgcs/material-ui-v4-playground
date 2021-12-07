import {
  TextField,
  TextFieldProps,
  IconButton,
  InputAdornment,
} from '@material-ui/core';
import { Search, Person, Create } from '@material-ui/icons';

// styles
import { useStyles } from './styles';

const icons = {
  search: <Search />,
  person: <Person />,
  create: <Create />,
};

type InputProps = TextFieldProps & {
  right?: 'search' | 'person' | 'create';
  left?: 'search' | 'person' | 'create';
};

function Input({ right, left, ...props }: InputProps) {
  const classes = useStyles();

  // start icon
  const startAdornment = () => {
    if (left) {
      return <InputAdornment position="start">{icons[left]}</InputAdornment>;
    } else {
      return null;
    }
  };

  // end icon
  const endAdornment = () => {
    if (right) {
      return (
        <InputAdornment position="end">
          <IconButton onClick={() => console.log('Clicked')}>
            {icons[right]}
          </IconButton>
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
