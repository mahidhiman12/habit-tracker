// components/AddHabitForm.js
import React, { useState } from 'react';

const AddHabitForm = ({ addHabit }) => {
  const [habitName, setHabitName] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [reminder, setReminder] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (habitName.trim() && category) {
      addHabit({
        id: Date.now(),
        name: habitName,
        category,
        description,
        completed: false,
        reminder,
        streak: 0,
        lastCompleted: null,
      });
      setHabitName('');
      setCategory('');
      setDescription('');
      setReminder('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={habitName}
        onChange={(e) => setHabitName(e.target.value)}
        placeholder="Add a new habit"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description (optional)"
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Select Category</option>
        <option value="Health">Health</option>
        <option value="Productivity">Productivity</option>
        <option value="Learning">Learning</option>
        <option value="Self-Care">Self-Care</option>
      </select>
      <input
        type="time"
        value={reminder}
        onChange={(e) => setReminder(e.target.value)}
        placeholder="Set Reminder"
      />
      <button type="submit">Add Habit</button>
    </form>
  );
};

export default AddHabitForm;
