import { Box, Stack } from '@mui/material'
import React from 'react'
import { AddButton } from '../ComponentLibrary/AddButton';
import { FilterButton } from '../ComponentLibrary/FilterButton';
import { SearchBar } from '../ComponentLibrary/SearchBar';

export const TaskMain = () => {
  return (
    <Box padding={5}>
        <Stack spacing={2}>
            <Box display="flex" alignItems={'center'} justifyContent='center' 
            gap={1} > 
                <SearchBar placeholderText='Search for tasks'/>
                <FilterButton />
                <AddButton />
            </Box>
        </Stack>
    </Box>
  )
}
