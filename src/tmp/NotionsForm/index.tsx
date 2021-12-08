import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Search } from '@material-ui/icons';

// assets
import { ReactComponent as FilterIcon } from '../../assets/icons/filters.svg';
import { ReactComponent as CalendarIcon } from '../../assets/icons/calendar.svg';
import { ReactComponent as ArrowDownIcon } from '../../assets/icons/arrowDown.svg';

// components
import { Input } from '../../common/components/Forms/Input';
import { DateInput } from '../../common/components/Forms/Date';

// styles
import { useStyles } from './styles';

type Filters = {
  date: Date;
  word: string;
};

function NotionsForm() {
  const [notion, setNotion] = React.useState('');
  const [filters, setFilters] = React.useState<Filters>({
    date: new Date(),
    word: '',
  });

  const classes = useStyles();

  function handleCreateNotion(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log('create notion');
  }

  // * Implement debounce
  useEffect(() => {
    const { date, word } = filters;

    // * Move this logic to service
    const parsedDate = date ? date.toISOString().split('T')[0] : '';

    const body = {
      word,
      date: parsedDate,
    };

    console.log(`[service] call with ${JSON.stringify(body)}`);
  }, [filters]);

  return (
    <div className={classes.container}>
      <form
        className={classes.formContainer}
        autoComplete="off"
        onSubmit={handleCreateNotion}
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

        <DateInput
          name="date"
          onChange={(value) => value && setFilters({ ...filters, date: value })}
          value={filters.date}
        />

        <Input
          name="notion"
          right={<Search />}
          onClickRight={() => console.log('search')}
          placeholder="Buscar palavra"
          onChange={(event) =>
            setFilters({ ...filters, word: event.target.value })
          }
          value={filters.word}
        />
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
