import React, { useState } from 'react';

const HabitTrackerPreview = () => {
  // Sample habits for preview
  const [habits, setHabits] = useState([
    { id: 1, name: 'Exercise', completed: false },
    { id: 2, name: 'Read 20 pages', completed: true },
    { id: 3, name: 'Drink 2L water', completed: false },
  ]);

  const toggleHabit = (id) => {
    setHabits((prevHabits) =>
      prevHabits.map((habit) =>
        habit.id === id ? { ...habit, completed: !habit.completed } : habit
      )
    );
  };

  return (
    <div className="habit-tracker-preview">
      <h4>Habit Tracker Preview</h4>
      <ul>
        {habits.map((habit) => (
          <li key={habit.id}>
            <label>
              <input
                type="checkbox"
                checked={habit.completed}
                onChange={() => toggleHabit(habit.id)}
              />
              {habit.name}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HabitTrackerPreview;
