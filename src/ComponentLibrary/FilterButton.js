import React, { useState } from 'react';
import { IconButton, Menu, MenuItem, MenuList, Paper, Popover, Box } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';

export const FilterButton = ({onSortChange}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [sortAnchorEl, setSortAnchorEl] = useState(null);
  const [filterAnchorEl, setFilterAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSortAnchorEl(null);
    setFilterAnchorEl(null);
  };

  const handleSortClick = (event) => {
    setSortAnchorEl(event.currentTarget);
  }

  const handleFilterClick = (event) => {
    setFilterAnchorEl(event.currentTarget);
  }

  const handleSortSelect = (value) => {
    onSortChange(value);
    handleClose();
  }

  return (
    <>
      <IconButton sx={{ color: 'teal' }} onClick={handleClick}>
        <FilterListIcon fontSize="large" />
      </IconButton>

      {/* Main menu for filter or sort*/}
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleSortClick}>Sort</MenuItem>
        <MenuItem onClick={handleFilterClick}>Filter</MenuItem>
      </Menu>

      {/*Menu for sort*/}
      <Menu
        anchorEl={sortAnchorEl}
        open={Boolean(sortAnchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleSortSelect('newest')}>Newest</MenuItem>
        <MenuItem onClick={() => handleSortSelect('oldest')}>Oldest</MenuItem>
        <MenuItem onClick={() => handleSortSelect('az')}>Alphabetical (ascending)</MenuItem>
        <MenuItem onClick={() => handleSortSelect('za')}>Alphabetical (descending)</MenuItem>
      </Menu>

      {/*Menu for filter*/}
      <Menu
        anchorEl={filterAnchorEl}
        open={Boolean(filterAnchorEl)}
        onClose={handleClose}
      >
        <MenuItem>All</MenuItem>
        <MenuItem>Complete</MenuItem>
        <MenuItem>Incomplete</MenuItem>
      </Menu>
    </>
  );
};
