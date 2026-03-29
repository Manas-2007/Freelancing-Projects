import React from 'react';
import HomePage from './pages/HomePage'; // Make sure the path to your pages folder is correct

function App() {
  return (
    <div className="App">
      {/* This renders our SocialSphere Landing Page */}
      <HomePage />
    </div>
  );
}

// This line fixes the "Requested module does not provide a default export" error
export default App;