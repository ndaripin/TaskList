import React from 'react'
import { IconButton } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';

export const FilterButton = () => {
  return (
    <IconButton sx={{color: 'teal'}}>
        <FilterListIcon fontSize='large'/>
    </IconButton>
  )
}
