import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
  'Select master blaster campaign settings',
  'Create an ad group',
  'Create an ad',
];

export default function Steps() {
  return (
    <Box sx={{ width: {md:'30%',xs:'100%'} }}>
      <Stepper activeStep={0} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel  sx={{color: "#E19B09"}}></StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}