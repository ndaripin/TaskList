import { Box, Stack, List } from '@mui/material';
import React, { useState } from 'react';
import { AddButton } from '../ComponentLibrary/AddButton';
import { FilterButton } from '../ComponentLibrary/FilterButton';
import { SearchBar } from '../ComponentLibrary/SearchBar';
import { ModalTemp } from '../ComponentLibrary/ModalTemp';
import { TaskItem } from '../ComponentLibrary/TaskItem';

export const TaskMain = () => {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sortMode, setSortMode] = useState('newest');

  const handleAddClick = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  const handleTaskSubmit = (text) => {
    const newTask = {
      text,
      createdAt: new Date().toISOString(),
    };
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (taskToDelete) => {
    setTasks(tasks.filter((task) => task !== taskToDelete));
  };

  const handleSortChange = (mode) => {
    setSortMode(mode);
  };

  const sortedTasks = [...tasks].sort((a, b) => {
    if (sortMode === 'newest') return new Date(b.createdAt) - new Date(a.createdAt);
    if (sortMode === 'oldest') return new Date(a.createdAt) - new Date(b.createdAt);
    if (sortMode === 'az') return a.text.localeCompare(b.text);
    if (sortMode === 'za') return b.text.localeCompare(a.text);
    return 0;
  });

  return (
    <Box padding={5}>
      <Stack spacing={3}>
        <Box display="flex" alignItems="center" justifyContent="center" gap={1}>
          <SearchBar placeholderText="Search for tasks" />
          <FilterButton onSortChange={handleSortChange}/>
          <AddButton onClick={handleAddClick} />
        </Box>
        <Box display="flex" justifyContent="center">
          <Box display="flex" alignItems="center" justifyContent="flex-start"
            sx={{
              width: '500px'
            }}
          >
            <List sx={{ width: '100%' }} spacing={3}>
            {sortedTasks.map((task, index) => (
                <TaskItem key={index} text={task.text} 
                onDelete={() => handleDeleteTask(task)} />
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
