import * as React from 'react';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import SettingsIcon from '@material-ui/icons/Settings';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';
import { ConnectorStyles, StepIconStyles, useStyles } from './styles';

type StepIconProps = {
  active?: boolean;
  completed?: boolean;
  icon: 1 | 2 | 3;
  step: Record<string, unknown>
};

function StepIcon(props: StepIconProps) {
  const classes = StepIconStyles();
  const { active, completed, icon, step } = props;
  console.log('step', step)

  const icons = {
    1: <SettingsIcon />,
    2: <GroupAddIcon />,
    3: <VideoLabelIcon />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[icon]}
    </div>
  );
}

function getSteps() {
  return [
    {
      id: 1,
      label: 'Select campaign settings',
      payment: true,
    },
    {
      id: 2,
      label: 'Create an ad group',
      payment: false,
    },
    {
      id: 3,
      label: 'Create an ad',
      payment: false,
    },
  ];
}

export default function CustomizedSteppers() {
  const classes = useStyles();
  const steps = getSteps();

  return (
    <div className={classes.root}>
      <Stepper alternativeLabel activeStep={2} connector={<ConnectorStyles />}>
        {steps.map((step) => (
          <Step key={step.id}>
            <StepLabel StepIconComponent={(event) => StepIcon({...event, step})}>{step.label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}
