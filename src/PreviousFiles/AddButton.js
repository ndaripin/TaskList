import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { IconButton } from '@mui/material';

export const AddButton = ({onClick}) => {
  return (
    <IconButton onClick={onClick} sx={{color: 'teal'}}>
        <AddIcon fontSize="large"/>
    </IconButton>
  )
}
