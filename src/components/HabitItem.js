// components/HabitItem.js
import React from 'react';

const HabitItem = ({ habit, toggleHabitCompletion }) => {
  return (
    <div className={`habit-card ${habit.completed ? 'completed' : ''}`}>
      <h3>{habit.name} <span className="category-tag">({habit.category})</span></h3>
      {habit.description && <p>{habit.description}</p>}
      {habit.reminder && <p><strong>Reminder:</strong> {habit.reminder}</p>}
      <p><strong>Streak:</strong> {habit.streak} day{habit.streak > 1 ? 's' : ''}</p>
      <button onClick={() => toggleHabitCompletion(habit.id)}>
        {habit.completed ? '✅ Completed' : 'Mark as Complete'}
      </button>
    </div>
  );
};

export default HabitItem;
