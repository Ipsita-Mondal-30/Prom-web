import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import YesPage from './pages/YesPage';
import NoLoop from './pages/NoLoop';
import LoginPage from './pages/LoginPage';
import YesGame from './pages/YesGame';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/yes" element={<YesPage />} />
        <Route path="/no-loop" element={<NoLoop />} />
        <Route path="/game" element={<YesGame />} />
      </Routes>
    </Router>
  );
};

export default App;
