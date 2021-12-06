import Paper from '@material-ui/core/Paper';
import { InputBase, InputBaseProps } from '@material-ui/core';
import { SvgIconComponent } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';

// styles
import { useStyles } from './styles';

type InputProps = InputBaseProps & {
  icon?: SvgIconComponent;
};

function Input({ icon: Icon, ...rest }: InputProps) {
  const classes = useStyles();

  return (
    <Paper className={classes.root} variant="outlined">
      <InputBase
        className={classes.input}
        inputProps={{ 'aria-label': 'search google maps' }}
        {...rest}
      />
      {Icon && (
        <IconButton type="submit" style={{ padding: '0px' }}>
          <Icon className={classes.iconButton} />
        </IconButton>
      )}
    </Paper>
  );
}

export { Input };
