import { Box, Stack, Typography } from '@mui/material'
import React, {useState} from 'react'
import { PillButton } from '../ComponentLibrary/PillButton'
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { FilterAndSort } from './FilterAndSort';
import { v4 as uuidv4 } from 'uuid';
import { TaskList } from './TaskList';

export const Task = () => {
  const [tasks, setTasks] = useState([
    { id: uuidv4(), text: '', completed: false }
  ]);

  const handleAddTask = () => {
    setTasks([...tasks, { id: uuidv4(), text: '', completed: false }]);
  };

  const handleToggle = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleEdit = (id, newText) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, text: newText } : task
    ));
  };

  return (
    <Box sx={{ pl: '20%', pr: '20%', pt: 10 }}>
      <Stack spacing={3}>

        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant='h4'>
            Welcome, Naimi
          </Typography>
          <PillButton icon={<AddRoundedIcon fontSize="small" />} label={"New Task"} bgColor={'purple'} Color={'white'} onClick={handleAddTask}/>
        </Box>

        <FilterAndSort/>

        <Stack>
          {tasks.map(task => (
            <TaskList
              key={task.id}
              text={task.text}
              completed={task.completed}
              onToggle={() => handleToggle(task.id)}
              onDelete={() => handleDelete(task.id)}
              onEdit={(newText) => handleEdit(task.id, newText)}
            />
          ))}
        </Stack>

      </Stack>
    </Box>
  )
}

