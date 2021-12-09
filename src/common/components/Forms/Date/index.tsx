import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  KeyboardDatePickerProps,
} from '@material-ui/pickers';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';

// assets
import { ReactComponent as CalendarIcon } from '../../../../assets/icons/calendar.svg';

// styles
import { useStyles } from './styles';

type DateInputProps = KeyboardDatePickerProps & {
  value: Date | null;
  onChange: (data: MaterialUiPickersDate) => void;
};

function DateInput({ value, onChange, ...props }: DateInputProps) {
  const classes = useStyles();

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        disableToolbar
        keyboardIcon={<CalendarIcon width="24px" height="24px" />}
        InputProps={{
          disableUnderline: true,
        }}
        variant="inline"
        format="dd/MM/yyyy"
        margin="none"
        value={value}
        onChange={onChange}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
        className={classes.root}
        {...props}
      />
    </MuiPickersUtilsProvider>
  );
}

export { DateInput };
