import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';

// assets
import { ReactComponent as FilterIcon } from '../../assets/icons/filters.svg';
import { ReactComponent as CalendarIcon } from '../../assets/icons/calendar.svg';
import { ReactComponent as ArrowDownIcon } from '../../assets/icons/arrowDown.svg';

// components
import { Input } from '../../common/components/Forms/Input';
import { DateInput } from '../../common/components/Forms/Date';

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
      </form>

      <div className={classes.line} />

      <Typography className={classes.subTitle}>Histórico</Typography>

      <div className={classes.filtersContainer}>
        <FilterIcon className={classes.filtersIcon} />
        <Typography className={classes.filtersLabel}>Filtros</Typography>

        <Input icon={SearchIcon} />
        <DateInput />
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
    </div>
  );
}

export { NotionsForm };
