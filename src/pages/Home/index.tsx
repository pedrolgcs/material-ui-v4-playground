import React from 'react';
import Button from '@material-ui/core/Button';

// components
import { Modal } from '../../common/components/Modal';
import { MyNotionsForm } from '../../common/components/Forms/MyNotionsForm';

// styles
import { useStyles } from './styles';

const Home: React.FC = () => {
  const [openDialog, setOpenDialog] = React.useState(false);

  function toggleDialog() {
    setOpenDialog(!openDialog);
  }

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Material UI</h1>

      {/* Open dialog button */}
      <Button variant="contained" color="primary" onClick={toggleDialog}>
        Open dialog
      </Button>

      {/* Dialog */}
      <Modal
        title="Minhas anotações"
        open={openDialog}
        toggleDialog={toggleDialog}
      >
        <MyNotionsForm />
      </Modal>
    </div>
  );
};

export { Home };
