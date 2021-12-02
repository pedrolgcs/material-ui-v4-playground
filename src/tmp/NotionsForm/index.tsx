import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// assets
import { ReactComponent as FilterIcon } from '../../assets/icons/filters.svg';
import { ReactComponent as CalendarIcon } from '../../assets/icons/calendar.svg';
import { ReactComponent as ArrowDownIcon } from '../../assets/icons/arrowDown.svg';

// components
import { Input } from '../../common/components/Forms/Input';

// styles
import { useStyles } from './styles';

function NotionsForm() {
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

        <Input
          variant="outlined"
          placeholder="Digite seu texto aqui"
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

        <div className={classes.filtersContainer}>
          <FilterIcon />
          <Typography className={classes.filtersLabel}>Histórico</Typography>
        </div>

        <ul className={classes.historyList}>
          <li className={classes.historyItem}>
            <CalendarIcon className={classes.historyItemIcon} />

            <Typography className={classes.historyItemDate}>
              20/01/2021
            </Typography>

            <Typography className={classes.historyItemText}>
              Cliente pediu outras opções de destino
            </Typography>
          </li>

          <li className={classes.historyItem}>
            <CalendarIcon className={classes.historyItemIcon} />

            <Typography className={classes.historyItemDate}>
              20/01/2021
            </Typography>

            <Typography className={classes.historyItemText}>
              Cliente pediu outras opções de destino
            </Typography>
          </li>

          <li className={classes.historyItem}>
            <CalendarIcon className={classes.historyItemIcon} />

            <Typography className={classes.historyItemDate}>
              20/01/2021
            </Typography>

            <Typography className={classes.historyItemText}>
              Cliente pediu outras opções de destino
            </Typography>
          </li>
        </ul>

        <div className={classes.footerContainer}>
          <span>Ver todas as anotações</span>
          <ArrowDownIcon stroke="#237FD0" />
        </div>
      </form>
    </div>
  );
}

export { NotionsForm };
