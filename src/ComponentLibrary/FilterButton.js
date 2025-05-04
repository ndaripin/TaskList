import React, { useState } from 'react';
import { IconButton, Menu, MenuItem, MenuList, Paper, Popover, Box } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';

export const FilterButton = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [sortAnchorEl, setSortAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSortAnchorEl(null);
  };

  const handleSortClick = (event) => {
    setSortAnchorEl(event.currentTarget);
  }

  return (
    <>
      <IconButton sx={{ color: 'teal' }} onClick={handleClick}>
        <FilterListIcon fontSize="large" />
      </IconButton>

      {/* Main menu for filter or sort*/}
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleSortClick}>Sort</MenuItem>
        <MenuItem disabled>Filter</MenuItem>
      </Menu>

      {/*Menu for sort*/}
      <Menu
        anchorEl={sortAnchorEl}
        open={Boolean(sortAnchorEl)}
        onClose={handleClose}
      >
        <MenuItem>Newest</MenuItem>
        <MenuItem>Oldest</MenuItem>
        <MenuItem>Alphabetical (ascending)</MenuItem>
        <MenuItem>Alphabetical (descending)</MenuItem>
      </Menu>
    </>
  );
};
