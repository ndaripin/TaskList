import React from 'react';
import { Button, useMediaQuery, useTheme, Tooltip } from '@mui/material';

export const PillButton = ({ onClick, icon, label, bgColor = 'white', Color = 'purple' }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Tooltip title={label} disableHoverListener={!isSmallScreen}>
      <Button
        onClick={onClick}
        variant="contained"
        sx={{
          bgcolor: bgColor,
          color: Color,
          borderRadius: '9999px',
          px: isSmallScreen ? 1.2 : 2,
          minWidth: isSmallScreen ? 'auto' : undefined,
          textTransform: 'none',
          '&:hover': {
            bgcolor: bgColor,
          }
        }}
      >
        {isSmallScreen ? icon : <>
          {icon}
          {label}
        </>}
      </Button>
    </Tooltip>
  );
};
