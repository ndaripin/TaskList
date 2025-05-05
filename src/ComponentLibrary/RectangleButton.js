import React from 'react';
import { Button } from '@mui/material';

export const RectangleButton = ({ onClick, icon, label, bgColor='white', Color='purple' }) => {
  return (
    <Button 
      onClick={onClick} 
      variant="contained"
      startIcon={icon}
      sx={{ 
        bgcolor: bgColor, 
        borderRadius: 2, 
        color: Color, 
        px: 2, 
        textTransform: 'none'
      }}
    >
      {label}
    </Button>
  );
};