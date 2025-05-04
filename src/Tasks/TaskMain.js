import { Box, Stack, List } from '@mui/material';
import React, { useState } from 'react';
import { AddButton } from '../ComponentLibrary/AddButton';
import { FilterButton } from '../ComponentLibrary/FilterButton';
import { SearchBar } from '../ComponentLibrary/SearchBar';
import { ModalTemp } from '../ComponentLibrary/ModalTemp';
import { TaskItem } from '../ComponentLibrary/TaskItem';
import { grey } from '@mui/material/colors';

export const TaskMain = () => {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddClick = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  const handleTaskSubmit = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <Box padding={5}>
      <Stack spacing={3}>
        <Box display="flex" alignItems="center" justifyContent="center" gap={1}>
          <SearchBar placeholderText="Search for tasks" />
          <FilterButton />
          <AddButton onClick={handleAddClick} />
        </Box>
        <Box display="flex" justifyContent="center">
          <Box display="flex" alignItems="center" justifyContent="flex-start"
            sx={{
              width: '500px'
            }}
          >
            <List sx={{ width: '100%' }} spacing={3}>
              {tasks.map((task, index) => (
                <TaskItem key={index} task={task}/>
              ))}
            </List>
          </Box>
        </Box>
        <ModalTemp
          open={isModalOpen}
          onClose={handleModalClose}
          onSubmit={handleTaskSubmit}
        />
      </Stack>
    </Box>
  );
};
