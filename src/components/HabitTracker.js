import React, { useState } from 'react';
import './HabitTracker.css'; // Ensure CSS styles are correctly applied
import Calendar from 'react-calendar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-modal';

// Modal accessibility
Modal.setAppElement('#root');

const HabitTracker = () => {
  const [habits, setHabits] = useState([]);
  const [habitInput, setHabitInput] = useState("");
  const [habitDescription, setHabitDescription] = useState("");
  const [category, setCategory] = useState("Health");
  const [view, setView] = useState("daily");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isCalendarOpen, setIsCalendarOpen] = useState(false); // Calendar modal visibility state

  const categories = ["Health", "Productivity", "Fitness", "Learning", "Other"];

  const handleAddHabit = (e) => {
    e.preventDefault();
    if (habitInput && habitDescription) {
      const newHabit = {
        name: habitInput,
        description: habitDescription,
        category: category,
        streak: 0,
        completedDates: [], // Track dates when habit is completed
      };
      setHabits([...habits, newHabit]);
      setHabitInput("");
      setHabitDescription("");
      toast.success("Habit added successfully!");
    }
  };

  const incrementStreak = (index) => {
    const updatedHabits = [...habits];
    updatedHabits[index].streak += 1;
    setHabits(updatedHabits);
    toast.info(`Streak updated for ${habits[index].name}`);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date); // Update selected date
    const updatedHabits = [...habits];
    updatedHabits.forEach((habit) => {
      if (!habit.completedDates.includes(date)) {
        habit.completedDates.push(date);
        incrementStreak(habits.indexOf(habit)); // Increase streak for the habit
      }
    });
    setHabits(updatedHabits);
    toast.success("Habit marked as completed for the day!");
  };

  const handleViewChange = (newView) => {
    setView(newView);
  };

  const openCalendar = () => {
    setIsCalendarOpen(true); // Open the calendar modal
  };

  const closeCalendar = () => {
    setIsCalendarOpen(false); // Close the calendar modal
  };

  return (
    <div className="habit-tracker">
      <h1>Your Habit Tracker</h1>

      {/* View Selector */}
      <div className="view-selector">
        <button onClick={() => handleViewChange("daily")}>Daily</button>
        <button onClick={() => handleViewChange("weekly")}>Weekly</button>
        <button onClick={() => handleViewChange("monthly")}>Monthly</button>
      </div>

      <h3>Current View: {view.charAt(0).toUpperCase() + view.slice(1)}</h3>

      {/* Habit Add Form */}
      <form onSubmit={handleAddHabit}>
        <input
          type="text"
          value={habitInput}
          onChange={(e) => setHabitInput(e.target.value)}
          placeholder="Habit Name"
        />
        <input
          type="text"
          value={habitDescription}
          onChange={(e) => setHabitDescription(e.target.value)}
          placeholder="Habit Description"
        />
        <select onChange={(e) => setCategory(e.target.value)} value={category}>
          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <button type="submit">Add Habit</button>
      </form>

      {/* Calendar Button */}
      <div className="calendar-button">
        <button onClick={openCalendar}>Open Calendar</button>
      </div>

      {/* Habit List - Display Habits as Cards */}
      <div className="habit-dashboard">
        {habits.length > 0 ? (
          habits.map((habit, index) => (
            <div key={index} className="habit-card">
              <h3>{habit.name}</h3>
              <p>{habit.description}</p>
              <p><strong>Category:</strong> {habit.category}</p>
              <div className="streak">
                <span>Streak: {habit.streak} days</span>
                <button onClick={() => incrementStreak(index)}>Increase Streak</button>
              </div>
              <div className="completed-dates">
                <p><strong>Completed Dates:</strong></p>
                {habit.completedDates.length > 0 ? (
                  <ul>
                    {habit.completedDates.map((date, index) => (
                      <li key={index}>{date.toLocaleDateString()}</li>
                    ))}
                  </ul>
                ) : (
                  <p>No dates marked yet.</p>
                )}
              </div>
            </div>
          ))
        ) : (
          <p>No habits added yet. Start by adding some!</p>
        )}
      </div>

      {/* Toast Container for Notifications */}
      <ToastContainer />

      {/* Calendar Modal */}
      <Modal isOpen={isCalendarOpen} onRequestClose={closeCalendar} className="calendar-modal">
        <h2>Select a Date to Mark Habit</h2>
        <Calendar
          onChange={handleDateChange}
          value={selectedDate}
          className="styled-calendar"
        />
        <button onClick={closeCalendar}>Close Calendar</button>
      </Modal>
    </div>
  );
};

export default HabitTracker;





