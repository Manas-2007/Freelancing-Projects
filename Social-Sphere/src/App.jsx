import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { SocialProvider, useSocial } from './context/SocialContext'; 
import HomePage from './pages/HomePage';
import FeedView from './pages/FeedView';
import ExploreView from './pages/ExploreView';
import Dashboard from './pages/DashBoard';
import SettingsView from './pages/SettingsView'; 
import NotificationsView from './pages/NotificationsView';
import ProfileView from './pages/ProfileView';
import HomeView from './pages/HomeView';

// --- THE SECURITY GUARD ---
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useSocial();
  
  // Agar login nahi hai (false), toh seedha Landing Page par bhej do
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  
  return children;
};

function App() {
  return (
    // Wrap everything in SocialProvider to share the "Brain"
    <SocialProvider>
      <Router>
        <div className="App font-sans">
          <Routes>
            {/* 1. Public Route (Landing Page) */}
            <Route path="/" element={<HomePage />} />
            
            {/* 2. Protected Dashboard Shell */}
            {/* User can only enter here if isAuthenticated is true */}
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            >
              {/* Default redirect to Home inside dashboard */}
              <Route index element={<Navigate to="home" replace />} />
              
              <Route path="home" element={<HomeView/>} />
              <Route path="profile" element={<ProfileView />} />
              <Route path="feed" element={<FeedView/>} />
              <Route path="explore" element={<ExploreView />} />
              <Route path="settings" element={<SettingsView />} />
              <Route path="notifications" element={<NotificationsView />} />
            </Route>

            {/* 404 Catch-all */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </Router>   
    </SocialProvider>
  );
}

export default App;