//import { TaskMain } from './Tasks/TaskMain';
import { Task } from "./Tasks/Task";
import theme from "./theme";
import { ThemeProvider } from '@mui/material/styles';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Task />
      </ThemeProvider>
    </div>
  );
}

export default App;
