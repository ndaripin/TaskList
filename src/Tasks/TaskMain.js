import { Box, Stack } from '@mui/material'
import React, {useState} from 'react'
import { AddButton } from '../ComponentLibrary/AddButton';
import { FilterButton } from '../ComponentLibrary/FilterButton';
import { SearchBar } from '../ComponentLibrary/SearchBar';
import { ModalTemp } from '../ComponentLibrary/ModalTemp';

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
      <Stack spacing={2}>
        <Box display="flex" alignItems="center" justifyContent="center" gap={1}>
          <SearchBar placeholderText="Search for tasks" />
          <FilterButton />
          <AddButton onClick={handleAddClick} />
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
