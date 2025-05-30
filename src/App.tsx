import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import MissionTerminal from './pages/MissionTerminal';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/missions" element={<MissionTerminal />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;