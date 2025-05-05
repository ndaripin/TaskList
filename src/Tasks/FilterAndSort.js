import React from 'react'
import { Box, Typography, Stack } from '@mui/material'
import { PillButton } from '../ComponentLibrary/PillButton'
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';
import SwapVertRoundedIcon from '@mui/icons-material/SwapVertRounded';

export const FilterAndSort = () => {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant='subtitle1'>Showing x of y tasks</Typography>
        <Stack direction="row" spacing={1}>
            <PillButton icon={<FilterListRoundedIcon fontSize="small" />} label="Filter by" />
            <PillButton icon={<SwapVertRoundedIcon fontSize="small" />} label="Sort by" />
        </Stack>
    </Box>
  )
}
