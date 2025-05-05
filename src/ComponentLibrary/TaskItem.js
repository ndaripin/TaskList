import React from 'react';
import { Checkbox, IconButton, ListItem, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export const TaskItem = ({ text, onDelete }) => {
  return (
    <ListItem
      sx={{
        bgcolor: 'whitesmoke',
        borderRadius: 1,
        p: 1.5,
        mb: 1,
        display: 'flex',
        alignItems: 'center',
      }}
      secondaryAction={
        <IconButton edge="end" onClick={onDelete}>
          <DeleteIcon />
        </IconButton>
      }
    >
      <Checkbox sx={{ mr: 1 }} />
      <ListItemText primary={text} />
    </ListItem>
  );
};
