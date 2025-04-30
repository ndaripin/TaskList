import React from 'react'
import { Button } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';

export const FilterButton = () => {
  return (
    <Button sx={{color: 'teal'}}>
        <FilterListIcon fontSize='large'/>
    </Button>
  )
}
