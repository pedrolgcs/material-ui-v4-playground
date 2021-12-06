import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';

// styles
import { useStyles } from './styles';

type DateInputProps = {
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

function DateInput({ onChange, value, name }: DateInputProps) {
  const classes = useStyles();

  return (
    <Paper className={classes.root} variant="outlined">
      <TextField
        type="date"
        name={name}
        onChange={onChange}
        value={value}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </Paper>
  );
}

export { DateInput };
