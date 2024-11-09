import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FrontPage.css';

const FrontPage = () => {
  const navigate = useNavigate();  // This hook is for navigation

  const handleGetStarted = () => {
    navigate('/tracker'); // Navigate to the habit tracker page
  };

  return (
    <div className="front-page">
      <div className="container">
        <h1>Welcome to Your Habit Tracker</h1>
        <p>Track your habits, build streaks, and stay consistent. Let's get started!</p>
        <button onClick={handleGetStarted}>Get Started</button>
      </div>
    </div>
  );
};

export default FrontPage;
