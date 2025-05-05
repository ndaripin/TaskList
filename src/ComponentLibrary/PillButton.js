import React from 'react';
import { Button } from '@mui/material';

export const PillButton = ({ onClick, icon, label, bgColor='secondary.main', Color='primary.main' }) => {
  return (
    <Button 
      onClick={onClick} 
      variant="contained"
      startIcon={icon}
      sx={{ 
        bgcolor: bgColor, 
        borderRadius: '9999px', 
        color: Color, 
        px: 2, 
        textTransform: 'none'
      }}
    >
      {label}
    </Button>
  );
};


