import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Search } from '@material-ui/icons';
import { add } from 'date-fns';

// assets
import { ReactComponent as FilterIcon } from '../../assets/icons/filters.svg';
import { ReactComponent as CalendarIcon } from '../../assets/icons/calendar.svg';
import { ReactComponent as ArrowDownIcon } from '../../assets/icons/arrowDown.svg';

// components
import { TextInput } from '../../common/components/Forms/Input';
import { DateInput } from '../../common/components/Forms/Date';

// styles
import { useStyles } from './styles';

type Filters = {
  date: Date;
  word: string;
};

const MIN_DATE = add(new Date(), { days: 1 });

function NotionsForm() {
  const [notion, setNotion] = React.useState('');
  const [filters, setFilters] = React.useState<Filters>({
    date: MIN_DATE,
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
    // const parsedDate = date ? date.toISOString().split('T')[0] : '';

    const body = {
      word,
      date,
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

        <TextInput
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

      <Typography className={classes.subTitle}>Hist??rico</Typography>

      <div className={classes.filtersContainer}>
        <FilterIcon className={classes.filtersIcon} />
        <Typography className={classes.filtersLabel}>Filtros</Typography>

        <DateInput
          name="date"
          value={filters.date}
          minDate={MIN_DATE}
          onChange={(value) => value && setFilters({ ...filters, date: value })}
        />

        <TextInput
          name="notion"
          actionIcon={<Search />}
          onClickActionIcon={() => console.log('search')}
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
            Cliente pediu outras op????es de destino
          </Typography>
        </li>

        <li className={classes.historyItem}>
          <CalendarIcon className={classes.historyItemIcon} />

          <Typography className={classes.historyItemDate}>
            20/01/2021
          </Typography>

          <Typography className={classes.historyItemText}>
            Cliente pediu outras op????es de destino
          </Typography>
        </li>

        <li className={classes.historyItem}>
          <CalendarIcon className={classes.historyItemIcon} />

          <Typography className={classes.historyItemDate}>
            20/01/2021
          </Typography>

          <Typography className={classes.historyItemText}>
            Cliente pediu outras op????es de destino
          </Typography>
        </li>
      </ul>

      <div className={classes.footerContainer}>
        <span>Ver todas as anota????es</span>
        <ArrowDownIcon stroke="#237FD0" />
      </div>
    </div>
  );
}

export { NotionsForm };
