import React from 'react';
import { BrowserRouter as Router, Route, Routes, HashRouter } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Leads from './components/Leads';
import Analytics from './components/Analytics';
import Reports from './components/Reports';

const App = () => {
  return (
    <HashRouter>
      <div className="app">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/leads" element={<Leads />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
};

export default App;
