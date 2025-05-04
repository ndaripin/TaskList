import React, { useState } from 'react';
import { Modal, Box, Typography, TextField, Button } from '@mui/material';

export const ModalTemp = ({ open, onClose, onSubmit }) => {
  const [taskInput, setTaskInput] = useState('');

  const handleSubmit = () => {
    if (taskInput.trim()) {
      onSubmit(taskInput);
      setTaskInput('');
      onClose();
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          borderRadius: 2,
          boxShadow: 24,
          p: 3,
        }}
      >
        <Typography variant="h6" mb={2}>Add New Task</Typography>
        <TextField
          fullWidth
          label="Task"
          variant="outlined"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <Box mt={2} display="flex" justifyContent="flex-end" gap={1}>
          <Button onClick={onClose}>Cancel</Button>
          <Button variant="contained" onClick={handleSubmit}>Add</Button>
        </Box>
      </Box>
    </Modal>
  );
};
