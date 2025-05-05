# Task Tracker App


## Objective

This app is a simple task tracker which allows you to add, modify, and delete tasks as needed. It also has the ability to to filter and sort your tasks and locally save your tasks. 

## How to run the application

After cloning this repository, please install the following packages:
```bash
npm install uuid
npm install @mui/material @emotion/react @emotion/styled
npm install react react-dom
```

Now to start the application, please run:
```bash
npm start
```

A window should open up, but the program should now be accesible on your browser at http://localhost:3000.

## Features

1. **Task List Display**  
   Tasks are displayed in a list with the ability to check them off and delete them.

2. **Add Editable Tasks**  
   Clicking the New Task button adds an editable task to the top of the list.  
   Pressing Enter or clicking away will save the task.

3. **Task Count Tracking**  
   The number of tasks currently shown is displayed above the list to help track progress.

4. **Hover-to-Delete**  
   The delete icon appears when hovering over a task. Once clicked, the task is removed from the list.

5. **Filter and Sort Options**  
   - Dropdown buttons for Filter and Sort allow category selection.
   - Default view shows all tasks sorted by newest created.
   - Regardless of filter/sort, completed tasks are always moved to the bottom.


## Future Goals

1. **Persistent Deletion**  
   Improve the delete functionality to permanently remove the task from `localStorage` instead of just filtering it out.

2. **Clear Completed Tasks**  
   Add a "Clear All Completed" button to quickly clean up finished tasks.

3. **Auto-Hide Completed Tasks**  
   Automatically hide completed tasks after a certain number of total tasks are added.

4. **UI & UX Enhancements**  
   - Refine background image sizing for better responsiveness.
   - Improve user interactions, animations, and visual feedback.

