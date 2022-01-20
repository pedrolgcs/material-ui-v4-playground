import React from 'react';

// components
import { NotionsForm } from '../../tmp/NotionsForm';
import { Modal } from '../../common/components/Modal';

// styles
import { useStyles } from './styles';

const Home: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Material UI</h1>

      <Modal open={true} toggleModal={() => {}}>
        <NotionsForm />
      </Modal>
    </div>
  );
};

export { Home };
