import React from 'react'
import { TextField } from '@mui/material';

export const SearchBar = ({placeholderText="Search..."}) => {
  return (
    <TextField placeholder={placeholderText}
    sx={{
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'teal', // default border color
            },
            '&.Mui-focused fieldset': {
                borderColor: 'teal', // focused border color
            },
        }
    }}/>
  )
}
