import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';

export const AddButton = ({onClick}) => {
  return (
    <Button onClick={onClick} sx={{color: 'teal'}}>
        <AddIcon fontSize="large"/>
    </Button>
  )
}
