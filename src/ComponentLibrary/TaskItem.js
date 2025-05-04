import React from 'react';
import { Checkbox, IconButton, ListItem, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export const TaskItem = ({ task, onDelete }) => {
  return (
    <ListItem sx={{
        bgcolor: 'whitesmoke',
        borderRadius: 1,
        p: 1.5,
        mb: 1,
        display: 'flex',
        alignItems: 'center',
      }} 
      secondaryAction={
        <IconButton edge="end" onClick={() => onDelete(task)}>
          <DeleteIcon />
        </IconButton>
    }>
      <Checkbox />
      <ListItemText primary={task} />
    </ListItem>
  );
};
