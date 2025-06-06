import React from 'react';
import { Checkbox, IconButton, ListItem, TextField, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export const TaskList = ({ text, onDelete, completed, onToggle, onEdit, onKeyDown}) => {
  return (
    <ListItem
      sx={{
        bgcolor: 'secondary.main',
        borderRadius: 1,
        mb: 3,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        '&:hover .delete-button': {
          opacity: 1,
        },
      }}>
      <Box display="flex" alignItems="center" flexGrow={1}>
        <Checkbox checked={completed} onChange={onToggle} disabled={text.trim() === ''} 
        sx={{ 
            mr: 1,  
            color: 'primary.main',
            '&.Mui-checked': {
            color: 'primary.main',},
            '&.Mui-disabled':{
            color: 'primary.main',
            }
        }} />
        <TextField
          variant="standard"
          value={text}
          onChange={(e) => onEdit(e.target.value)}
          onKeyDown={onKeyDown}
          disabled={completed}
          placeholder="Add a task"
          InputProps={{
            disableUnderline: true,
            sx: {
              opacity: completed ? 0.5 : 1,
              fontSize: '1rem',
            },
          }}
          fullWidth/>
      </Box>

      <IconButton 
        onClick={onDelete} 
        className="delete-button"
        sx={{ opacity: 0, transition: 'opacity 0.2s ease-in-out' }}>
        <DeleteIcon sx={{ color:'primary.main'}}/>
      </IconButton>
    </ListItem>
  );
};


