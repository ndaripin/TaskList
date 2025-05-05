import { Box, Stack, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { PillButton } from '../ComponentLibrary/PillButton'
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { FilterAndSort } from './FilterAndSort';
import { v4 as uuidv4 } from 'uuid';
import { TaskList } from './TaskList';

const getBackgroundImage = () => {
  const hour = new Date().getHours();
  if (hour >= 4 && hour < 6) return '/4-6am.jpg';
  if (hour >= 6 && hour < 8) return '/6-8am.jpg';
  if (hour >= 8 && hour < 10) return '/8-10am.jpg';
  if (hour >= 10 && hour < 16) return '/10-4am.jpg';
  if (hour >= 16 && hour < 18) return '/4-6pm.jpg';
  if (hour >= 18 && hour < 20) return '/6-8pm.jpg';
  if (hour >= 20 && hour < 22) return '/8-10pm.jpg';
  return '/10-4pm.jpg';
};

const getTimeMessage = () => {
  const hour = new Date().getHours();
  if (hour >= 4 && hour < 6) return 'In wildest dreams, I never dreamed of this';
  if (hour >= 6 && hour < 8) return 'It’s golden like daylight';
  if (hour >= 8 && hour < 10) return 'Are you ready for it?';
  if (hour >= 10 && hour < 16) return 'My aura’s moonstone';
  if (hour >= 16 && hour < 18) return 'Wondrous time gave me the blues and then purple-pink skies';
  if (hour >= 18 && hour < 20) return 'I just wanna stay in that lavender haze';
  if (hour >= 20 && hour < 22) return 'Flying in a dream, stars by the pocketful';
  return 'Midnights become my afternoons';
};

const getTextColor = () => {
  const hour = new Date().getHours();
  if (hour >= 4 && hour < 20) return 'black';
  return 'secondary.main';
}

export const Task = () => {
  const [tasks, setTasks] = useState(() => {
    try {
      const stored = localStorage.getItem('taskList');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch (error) {
      console.error('Failed to load tasks:', error);
    }
  
    return [{ id: uuidv4(), text: '', completed: false, createdAt: new Date().toISOString() }];
  });
  
  const [filterMode, setFilterMode] = useState('all');
  const [sortMode, setSortMode] = useState('newest');

  useEffect(() => {
    try {
      const stored = localStorage.getItem('taskList');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setTasks(parsed);
        }
      }
    } catch (error) {
      console.error('Failed to load tasks:', error);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('taskList', JSON.stringify(tasks));
    } catch (error) {
      console.error('Failed to save tasks:', error);
    }
  }, [tasks]);

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
      e.preventDefault();
      e.target.blur();
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
    <Box
      sx={{
        pl: '20%',
        pr: '20%',
        pt: 10,
        minHeight: '100vh',
        backgroundImage: `url(${getBackgroundImage()})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ paddingBottom: 6 }}>
        <Typography variant='h4' color='secondary.main'>Welcome!</Typography>
        <PillButton icon={<AddRoundedIcon fontSize="small" />} label="New Task" bgColor='primary.main' Color='secondary.main' onClick={handleAddTask} />
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
      <Typography 
        variant="subtitle1"
        sx={{
          position: 'fixed',
          bottom: 24,
          left: 0,
          right: 0,
          textAlign: 'center',
          color: {getTextColor},
        }}
      >
        {getTimeMessage()}
      </Typography>
    </Box>
  );
};

