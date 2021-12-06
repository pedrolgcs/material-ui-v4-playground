import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import CloseOutlined from '@material-ui/icons/CloseOutlined';

// styles
import { useStyles } from './styles';

type DialogProps = {
  title?: string;
  open: boolean;
  toggleModal: () => void;
  children: React.ReactNode;
};

function Modal({ title, open, toggleModal, children }: DialogProps) {
  const classes = useStyles();

  return (
    <Dialog
      open={open}
      onClose={toggleModal}
      PaperProps={{ style: { overflowY: 'visible', padding: '10px 8px' } }}
      maxWidth="md"
    >
      <div className={classes.closeModal} onClick={toggleModal}>
        <CloseOutlined fontSize={'medium'} />
      </div>

      {title && <h1 className={classes.title}>{title}</h1>}

      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
}

export { Modal };
