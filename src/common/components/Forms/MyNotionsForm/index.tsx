import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

// styles
import { useStyles } from './styles';

function MyNotionsForm() {
  const [notion, setNotion] = React.useState('');

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    console.log(notion);
  }

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <form
        className={classes.formContainer}
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Typography className={classes.subTitle}>Nova nota</Typography>

        <TextField
          variant="outlined"
          placeholder="Digite seu texto aqui"
          inputProps={{ style: {} }}
          margin="normal"
          value={notion}
          onChange={(event) => setNotion(event.target.value)}
        />

        <Button
          type="submit"
          color="primary"
          variant="contained"
          className={classes.submitButton}
        >
          Salvar nota
        </Button>

        <div className={classes.line} />

        <Typography className={classes.subTitle}>Histórico</Typography>
      </form>
    </div>
  );
}

export { MyNotionsForm };
