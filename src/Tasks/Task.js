import { Box, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { PillButton } from '../ComponentLibrary/PillButton'
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { FilterAndSort } from './FilterAndSort';
import { v4 as uuidv4 } from 'uuid';
import { TaskList } from './TaskList';

export const Task = () => {
  const [tasks, setTasks] = useState([
    { id: uuidv4(), text: '', completed: false, createdAt: new Date().toISOString() }
  ]);
  const [filterMode, setFilterMode] = useState('all');
  const [sortMode, setSortMode] = useState('newest');

  const handleAddTask = () => {
    setTasks([...tasks, { id: uuidv4(), text: '', completed: false, createdAt: new Date().toISOString() }]);
  };

  const handleToggle = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleDelete = (id) => {
    if (tasks.length === 1) {
      setTasks([{ ...tasks[0], text: '', createdAt: new Date().toISOString() }]);
    } else {
      setTasks(tasks.filter(task => task.id !== id));
    }
  };

  const handleEdit = (id, newText) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, text: newText } : task
    ));
  };

  const handleKeyDown = (e, id, text) => {
    if (e.key === 'Enter' && text.trim() !== '') {
      const isLast = tasks[tasks.length - 1].id === id;
      if (isLast) handleAddTask();
    }
  };

  const handleFilterChange = (mode) => {
    setFilterMode(mode);
  };

  const handleSortChange = (mode) => {
    setSortMode(mode);
  };

  const sortTasks = (taskList) => {
    return [...taskList].sort((a, b) => {
      if (sortMode === 'newest') return new Date(b.createdAt) - new Date(a.createdAt);
      if (sortMode === 'oldest') return new Date(a.createdAt) - new Date(b.createdAt);
      return 0;
    });
  };

  const filteredTasks = tasks.filter(task => {
    if (filterMode === 'complete') return task.completed;
    if (filterMode === 'incomplete') return !task.completed;
    return true;
  });

  // Split completed and incomplete
  const incompleteTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);

  // Apply filter mode to completed + incomplete separately
  const filteredIncomplete = filterMode === 'all' || filterMode === 'incomplete' ? incompleteTasks : [];
  const filteredCompleted = filterMode === 'all' || filterMode === 'complete' ? completedTasks : [];

  // Apply sorting to each group
  const sortedIncomplete = sortTasks(filteredIncomplete);
  const sortedCompleted = sortTasks(filteredCompleted);

  // Always show completed first, then incomplete
  const visibleTasks = [ ...sortedIncomplete, ...sortedCompleted];


  return (
    <Box sx={{ pl: '20%', pr: '20%', pt: 10 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ paddingBottom: 4 }}>
        <Typography variant='h4'>Welcome!</Typography>
        <PillButton icon={<AddRoundedIcon fontSize="small" />} label="New Task" bgColor='purple' Color='white' onClick={handleAddTask} />
      </Box>

      <Stack spacing={3}>
        <FilterAndSort
          onFilterChange={handleFilterChange}
          onSortChange={handleSortChange}
          shownCount={visibleTasks.length}
          totalCount={tasks.length}
          filterMode={filterMode}
          sortMode={sortMode}
        />

        <Stack>
          {visibleTasks.map(task => (
            <TaskList
              key={task.id}
              text={task.text}
              completed={task.completed}
              onToggle={() => handleToggle(task.id)}
              onDelete={() => handleDelete(task.id)}
              onEdit={(newText) => handleEdit(task.id, newText)}
              onKeyDown={(e) => handleKeyDown(e, task.id, task.text)}
            />
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

