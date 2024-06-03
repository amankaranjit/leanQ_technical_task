import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './components/Dashboard';
import Home from './pages/Home';
import { requireAuth } from './services/authService';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const loginPath = "/login";

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login onLogin={() => setIsAuthenticated(true)} />} />
        <Route path="/dashboard" element={requireAuth(isAuthenticated, loginPath)(Dashboard)} />
      </Routes>
    </Router>
  );
};

export default App;
