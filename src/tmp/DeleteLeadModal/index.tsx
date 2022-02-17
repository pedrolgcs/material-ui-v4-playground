import * as React from 'react';
import clsx from 'clsx';
import { Modal } from '../../common/components/Modal';
import { useStyles } from './styles';

type DeleteLeadModalProps = {
  isOpen: boolean;
  handleClose: () => void;
  leadId: string;
};

type Channel = 'email' | 'phone' | 'whatsapp';

type Reasons = {
  label: string;
  value: string;
};

const CHANNELS: Record<Channel, { label: string; reasons: Reasons[] }> = {
  phone: {
    label: 'Telefone',
    reasons: [
      {
        label: 'Número inválido',
        value: 'invalid',
      },
      {
        label: 'Não atende',
        value: 'not_answer',
      },
      {
        label: 'Não cadastrado',
        value: 'not_registered',
      },
      {
        label: 'Não quer ligações',
        value: 'not_accept_calls',
      },
    ],
  },
  email: {
    label: 'E-mail',
    reasons: [
      {
        label: 'E-mail inválido',
        value: 'invalid',
      },
      {
        label: 'Não responde',
        value: 'not_answer',
      },
      {
        label: 'Não cadastrado',
        value: 'not_registered',
      },
      {
        label: 'Não quer receber',
        value: 'not_accept_emails',
      },
    ],
  },
  whatsapp: {
    label: 'WhatsApp',
    reasons: [
      {
        label: 'Não possui',
        value: 'not_found',
      },
      {
        label: 'Não responde',
        value: 'not_answer',
      },
      {
        label: 'Não cadastrado',
        value: 'not_registered',
      },
      {
        label: 'Não quer receber',
        value: 'not_accept_messages',
      },
    ],
  },
};

function DeleteLeadModal({
  isOpen,
  leadId,
  handleClose,
}: DeleteLeadModalProps) {
  const [channel, setChannel] = React.useState<Channel>('phone');
  const [reason, setReason] = React.useState('');
  const classes = useStyles({});

  async function handleDeleteLead() {
    const body = {
      wayOfContact: channel,
      dismissedReason: reason,
    };

    console.log(leadId);
    console.log(body);

    handleClose();
  }

  function renderReasonOptions(channel: Channel) {
    return (
      <>
        {CHANNELS[channel].reasons.map(({ label, value }) => (
          <button
            key={value}
            type="button"
            className={
              reason === value ? classes.button : classes.buttonOutlined
            }
            onClick={() => setReason(value)}
          >
            {label}
          </button>
        ))}
      </>
    );
  }

  return (
    <Modal
      title="Por qual motivo deseja excluir este lead?"
      open={isOpen}
      toggleModal={handleClose}
    >
      <p className={classes.description}>
        Informe como você tentou contato com o lead e o motivo da sua exclusão
      </p>

      <p className={classes.text}>Forma de contato</p>

      <div className={classes.buttonsContainer}>
        {Object.keys(CHANNELS).map((channelName) => (
          <button
            key={channelName}
            type="button"
            className={
              channel === channelName ? classes.button : classes.buttonOutlined
            }
            onClick={() => {
              setChannel(channelName as Channel);
              setReason('');
            }}
          >
            {CHANNELS[channelName as Channel].label}
          </button>
        ))}
      </div>

      <div>
        <p className={classes.text}>Motivo da exclusão do lead:</p>

        <div className={classes.buttonsContainer}>
          {renderReasonOptions(channel)}
        </div>
      </div>

      <p className={classes.text}>Não é possível recuperar o lead ao excluir</p>

      <div className={classes.buttonsActionContainerContainer}>
        <button
          type="button"
          className={clsx(classes.buttonOutlined, classes.actionButtonOutlined)}
          onClick={handleClose}
        >
          Cancelar
        </button>

        <button
          type="button"
          className={clsx(classes.button, classes.actionButton)}
          onClick={handleDeleteLead}
        >
          Confirmar exclusão
        </button>
      </div>
    </Modal>
  );
}

export { DeleteLeadModal };
