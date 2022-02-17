import React from 'react';

// components
import { Select } from '../../common/components/Forms/Select';

// styles
import { useStyles } from './styles';

type PaymentOption = {
  label: string;
  value: 'credit_card' | 'paypal' | 'bitcoin';
};

const PAYMENT_OPTIONS: PaymentOption[] = [
  {
    label: 'Credit Card',
    value: 'credit_card',
  },
  {
    label: 'PayPal',
    value: 'paypal',
  },
  {
    label: 'Bitcoin',
    value: 'bitcoin',
  },
];

function CreditCar() {
  return (
    <>
      <input type="text" placeholder="operação" />
      <input type="text" placeholder="valor" />
      <input type="text" placeholder="plano" />
      <input type="text" placeholder="parcelas" />
      <input type="text" placeholder="valor" />
    </>
  );
}

function PayPal() {
  return (
    <>
      <input type="text" placeholder="operação" />
      <input type="text" placeholder="valor" />
    </>
  );
}

function Bitcoin() {
  return (
    <>
      <input type="text" placeholder="valor" />
    </>
  );
}

const renderForm = {
  credit_card: <CreditCar />,
  paypal: <PayPal />,
  bitcoin: <Bitcoin />,
};

const Home: React.FC = () => {
  const [paymentType, setPaymentType] = React.useState<PaymentOption>(
    PAYMENT_OPTIONS[0]
  );
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Material UI</h1>

      <div className={classes.form}>
        <Select
          name="paymentType"
          options={PAYMENT_OPTIONS}
          value={paymentType}
          onChange={(event) => setPaymentType(event as PaymentOption)}
        />

        {renderForm[paymentType.value]}
      </div>
    </div>
  );
};

export { Home };
