import React, { useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { RectangleButton } from '../ComponentLibrary/RectangleButton';
import { PillButton } from '../ComponentLibrary/PillButton';
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';
import SwapVertRoundedIcon from '@mui/icons-material/SwapVertRounded';

export const FilterAndSort = ({ onSortChange, onFilterChange, shownCount = 0, totalCount = 0 }) => {
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

  return (
    <Stack spacing={2}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant='subtitle1'>
          Showing {shownCount} of {totalCount} tasks
        </Typography>

        <Stack direction="row" spacing={1}>
          <PillButton icon={<FilterListRoundedIcon fontSize="small" />} label="Filter by" onClick={toggleFilter} />
          <PillButton icon={<SwapVertRoundedIcon fontSize="small" />} label="Sort by" onClick={toggleSort} />
        </Stack>
      </Box>

      {showFilterOptions && (
        <Stack direction="row" spacing={1} justifyContent={"flex-end"}>
          <RectangleButton label="Show all" onClick={() => onFilterChange('all')} />
          <RectangleButton label="Incomplete" onClick={() => onFilterChange('incomplete')} />
          <RectangleButton label="Complete" onClick={() => onFilterChange('complete')} />
        </Stack>
      )}

      {showSortOptions && (
        <Stack direction="row" spacing={1} justifyContent={"flex-end"}>
          <RectangleButton label="Recently added" onClick={() => onSortChange('newest')} />
          <RectangleButton label="Oldest first" onClick={() => onSortChange('oldest')} />
        </Stack>
      )}
    </Stack>
  );
};

