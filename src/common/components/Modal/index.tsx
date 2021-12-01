import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import CloseOutlined from '@material-ui/icons/CloseOutlined';

// styles
import { useStyles } from './styles';

type DialogProps = {
  title?: string;
  open: boolean;
  toggleDialog: () => void;
  children: React.ReactNode;
};

function Modal({ title, open, toggleDialog, children }: DialogProps) {
  const classes = useStyles();

  return (
    <Dialog
      open={open}
      onClose={toggleDialog}
      PaperProps={{ style: { overflowY: 'visible' } }}
      maxWidth="md"
    >
      <div className={classes.closeModal} onClick={toggleDialog}>
        <CloseOutlined fontSize={'medium'} />
      </div>

      {title && <h1 className={classes.title}>{title}</h1>}

      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
}

export { Modal };
