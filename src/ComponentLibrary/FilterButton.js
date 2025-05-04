import React, { useState } from 'react';
import { IconButton, Menu, MenuItem, MenuList, Paper, Popover, Box } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';

export const FilterButton = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton sx={{ color: 'teal' }} onClick={handleClick}>
        <FilterListIcon fontSize="large" />
      </IconButton>

      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem disabled>Sort</MenuItem>
        <MenuItem disabled>Filter</MenuItem>
      </Menu>
    </>
  );
};
