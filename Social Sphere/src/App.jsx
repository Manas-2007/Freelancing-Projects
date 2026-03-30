import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FeedView from './pages/FeedView';
import ExploreView from './pages/ExploreView';
import Dashboard from './pages/DashBoard';
import SettingsView from './pages/SettingsView'; 
import NotificationsView from './pages/NotificationsView';
import ProfileView from './pages/ProfileView';
import HomeView from './pages/HomeView';

// A simple wrapper to make placeholder pages look clean
const Placeholder = ({ title }) => (
  <div className="flex flex-col items-center justify-center h-[60vh] bg-white/50 rounded-[35px] border-2 border-dashed border-slate-200 animate-in fade-in zoom-in duration-500">
    <h2 className="text-[30px] font-[1000] text-slate-800 tracking-tight">{title}</h2>
    <p className="text-slate-400 font-[600]">This module is currently under development.</p>
  </div>
);

function App() {
  return (
    <Router>
      <div className="App font-['Plus_Jakarta_Sans']">
        <Routes>
          {/* 1. Landing Page */}
          <Route path="/" element={<HomePage />} />
          
          {/* 2. Dashboard Shell */}
          <Route path="/dashboard" element={<Dashboard />}>
            {/* Redirect /dashboard to /dashboard/settings by default */}
            <Route index element={<Navigate to="settings" replace />} />
            
            {/* These paths must match the 'path' property in your Sidebar menuItems */}
            <Route path="home" element={<HomeView/>} />
            <Route path="profile" element={<ProfileView />} />
            <Route path="feed" element={<FeedView/>} />
            <Route path="explore" element={<ExploreView />} />
            <Route path="settings" element={<SettingsView />} />
            <Route path="notifications" element={<NotificationsView />} />
          </Route>

          {/* 404 Catch-all (Optional but good practice) */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>   
  );
}

export default App;