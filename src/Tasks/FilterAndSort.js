import React, { useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { RectangleButton } from '../ComponentLibrary/RectangleButton';
import { PillButton } from '../ComponentLibrary/PillButton';
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';
import SwapVertRoundedIcon from '@mui/icons-material/SwapVertRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';

export const FilterAndSort = ({ onSortChange, onFilterChange, shownCount = 0, totalCount = 0, filterMode, sortMode }) => {
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const [showSortOptions, setShowSortOptions] = useState(false);

  const toggleFilter = () => {
    setShowFilterOptions(!showFilterOptions);
    setShowSortOptions(false);
  };

  const toggleSort = () => {
    setShowSortOptions(!showSortOptions);
    setShowFilterOptions(false);
  };

  const formatMode = (mode) => {
    if (mode === 'all') return 'All';
    if (mode === 'complete') return 'Complete';
    if (mode === 'incomplete') return 'Incomplete';
    if (mode === 'newest') return 'Recently added';
    if (mode === 'oldest') return 'Oldest first';
    return mode;
  };

  return (
    <Stack spacing={2}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant='subtitle1'>
          Showing {shownCount} of {totalCount} tasks
        </Typography>

        <Stack direction="row" spacing={1}>
        <PillButton 
          icon={<FilterListRoundedIcon fontSize="small" />} 
          label={`Filter by: ${formatMode(filterMode)}`} 
          onClick={toggleFilter} 
          />
          <PillButton 
          icon={<SwapVertRoundedIcon fontSize="small" />} 
          label={`Sort by: ${formatMode(sortMode)}`} 
          onClick={toggleSort} 
          />
        </Stack>
      </Box>

      {showFilterOptions && (
        <Stack direction="row" spacing={1} justifyContent={"flex-end"}>
          <RectangleButton 
            label="Show all" 
            icon={filterMode === 'all' ? <CheckRoundedIcon fontSize="small" /> : null}
            onClick={() => onFilterChange('all')} 
          />
          <RectangleButton 
            label="Incomplete" 
            icon={filterMode === 'incomplete' ? <CheckRoundedIcon fontSize="small" /> : null}
            onClick={() => onFilterChange('incomplete')} 
          />
          <RectangleButton 
            label="Complete" 
            icon={filterMode === 'complete' ? <CheckRoundedIcon fontSize="small" /> : null}
            onClick={() => onFilterChange('complete')} 
          />
        </Stack>
      )}

      {showSortOptions && (
        <Stack direction="row" spacing={1} justifyContent={"flex-end"}>
          <RectangleButton 
            label="Recently added" 
            icon={sortMode === 'newest' ? <CheckRoundedIcon fontSize="small" /> : null}
            onClick={() => onSortChange('newest')} 
          />
          <RectangleButton 
            label="Oldest first" 
            icon={sortMode === 'oldest' ? <CheckRoundedIcon fontSize="small" /> : null}
            onClick={() => onSortChange('oldest')} 
          />
        </Stack>
      )}
      
    </Stack>
  );
};

