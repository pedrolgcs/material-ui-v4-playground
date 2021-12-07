import React from 'react';
import { Dialog, Typography } from '@material-ui/core';
import DialogContent from '@material-ui/core/DialogContent';
import CloseOutlined from '@material-ui/icons/CloseOutlined';

// styles
import { useStyles } from './styles';

type ModalProps = {
  title?: string;
  open: boolean;
  toggleModal: () => void;
  children: React.ReactNode;
};

function Modal({ title, open, toggleModal, children }: ModalProps) {
  const classes = useStyles();

  return (
    <Dialog
      open={open}
      onClose={toggleModal}
      PaperProps={{
        style: {
          overflowY: 'visible',
          padding: '10px 8px',
          borderRadius: '16px',
        },
      }}
      maxWidth="md"
    >
      {title ? (
        <div className={classes.titleContainer}>
          <Typography variant="h1" className={classes.title}>
            {title}
          </Typography>

          <div className={classes.closeContainer} onClick={toggleModal}>
            <CloseOutlined className={classes.closeButton} />
          </div>
        </div>
      ) : (
        <div
          className={classes.relativeCloseButtonContainer}
          onClick={toggleModal}
        >
          <CloseOutlined className={classes.absoluteCloseButton} />
        </div>
      )}

      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
}

export { Modal };
