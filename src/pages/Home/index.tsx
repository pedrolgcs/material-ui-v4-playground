import React from 'react';

// components
import CustomizedSteppers from '../../common/components/Stepper';

// styles
import { useStyles } from './styles';

const Home: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Material UI</h1>

      <div className={classes.wapper}>
        <CustomizedSteppers />
      </div>
    </div>
  );
};

export { Home };
