import React from 'react';
import { Checkbox, IconButton, ListItem, TextField, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export const TaskList = ({ text, onDelete, completed, onToggle, onEdit }) => {
  return (
    <ListItem
      sx={{
        bgcolor: 'whitesmoke',
        borderRadius: 1,
        p: 1.5,
        mb: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        '&:hover .delete-button': {
          opacity: 1,
        },
      }}
    >
      <Box display="flex" alignItems="center" flexGrow={1}>
        <Checkbox checked={completed} onChange={onToggle} sx={{ mr: 1 }} />
        <TextField
          variant="standard"
          value={text}
          onChange={(e) => onEdit(e.target.value)}
          InputProps={{
            disableUnderline: true,
            sx: {
              textDecoration: completed ? 'line-through' : 'none',
              fontSize: '1rem',
            },
          }}
          fullWidth
        />
      </Box>

      <IconButton 
        onClick={onDelete} 
        className="delete-button"
        sx={{ opacity: 0, transition: 'opacity 0.2s ease-in-out' }}
      >
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
};

