import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';

const steps = [
  'Select master blaster campaign settings',
  'Create an ad group',
  'Create an ad',
];
const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 11,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor:'#E19B09'
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
     backgroundColor:'#E19B09'
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 1,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
 
  },
}));
const ColorlibStepIconRoot = styled('div')(({ theme }) => ({
  backgroundColor: '#E1E1E1',
  zIndex: 1,
  color: '#252525',
  width: 25,
  height: 25,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  variants: [
    {
      props: ({ ownerState }) => ownerState.active,
      style: {
        backgroundColor: '#FFEDC6',
        border: '2px solid #E19B09',
        color: '#E19B09',
      },
    },
    {
      props: ({ ownerState }) => ownerState.completed,
      style: {
        backgroundColor: '#FFEDC6',
        border: '2px solid #E19B09',
        color: '#E19B09',
      },
    },
  ],

}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: '1',
    2: '2',
    3: '3',
  };

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};
export default function Steps() {
  return (
    <Box sx={{ width: {md:'30%',xs:'100%'} }}>
      <Stepper activeStep={2} alternativeLabel connector={<ColorlibConnector />} >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}  sx={{color: "#E19B09"}}></StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
