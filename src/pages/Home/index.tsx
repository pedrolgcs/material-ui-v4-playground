import React from 'react';
import Button from '@material-ui/core/Button';

// contexts
import { useUser } from '../../providers/userContext';

// components
import { Loader } from '../../common/components/Loader';

// styles
import { useStyles } from './styles';

const Home: React.FC = () => {
  const { user, loading, changeUser } = useUser();

  async function handleChangeUser() {
    await changeUser();
  }

  const classes = useStyles();

  console.log('user', user);

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Material UI</h1>

      <Button variant="contained" color="primary" onClick={handleChangeUser}>
        Change user
      </Button>

      {user && <h1>{user.name}</h1>}

      {loading && <Loader />}
    </div>
  );
};

export { Home };
