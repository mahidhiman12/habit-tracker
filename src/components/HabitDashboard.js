import React from 'react';
import './App.css'; // Make sure your CSS is imported

function HabitDashboard() {
  return (
    <div className="habit-dashboard">
      <div className="habit-card">
        <h3>Habit 1</h3>
        <p>Some description about Habit 1</p>
      </div>
      <div className="habit-card">
        <h3>Habit 2</h3>
        <p>Some description about Habit 2</p>
      </div>
      {/* Add more habit cards here */}
    </div>
  );
}

export default HabitDashboard;
