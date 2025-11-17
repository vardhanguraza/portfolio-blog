/**
 * Main App Component
 * Root application with routing and theme configuration
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Box, CssBaseline } from './components/MaterialUI';
import { ThemeProvider } from '@mui/material/styles';
import { appTheme } from './theme';
import NavBar from './components/layout/NavBar';
import Profile from './containers/Profile/Profile';
import Blogs from './containers/Blogs/Blogs';
import './App.scss';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <Router>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            backgroundColor: '#f5f7fa',
          }}
        >
          <NavBar />
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blogs />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/connect" element={<Connect />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Box>
      </Router>
    </ThemeProvider>
  );
};

// Placeholder components for future implementation
const Projects: React.FC = () => (
  <Box sx={{ padding: 4, textAlign: 'center' }}>
    <h1>Projects Coming Soon</h1>
  </Box>
);

const Connect: React.FC = () => (
  <Box sx={{ padding: 4, textAlign: 'center' }}>
    <h1>Connect Coming Soon</h1>
  </Box>
);

export default App;
