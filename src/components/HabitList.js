// components/HabitList.js
import React from 'react';
import HabitItem from './HabitItem';

const HabitList = ({ habits, toggleHabitCompletion }) => {
  return (
    <div>
      {habits.map((habit) => (
        <HabitItem key={habit.id} habit={habit} toggleHabitCompletion={toggleHabitCompletion} />
      ))}
    </div>
  );
};

export default HabitList;

