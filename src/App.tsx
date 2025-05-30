import React from 'react';
import Dashboard from './pages/Dashboard';
import MissionTerminal from './pages/MissionTerminal';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <MissionTerminal />
    </ThemeProvider>
  );
}

export default App;