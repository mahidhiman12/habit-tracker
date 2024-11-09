import React, { useState, useEffect } from 'react';
import './PomodoroTimer.css';

const PomodoroTimer = () => {
  const [time, setTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [mode, setMode] = useState("work");
  const [customWorkTime, setCustomWorkTime] = useState(25); // New state for custom work time

  // Timer intervals for different modes
  const intervals = {
    work: customWorkTime * 60,
    shortBreak: 5 * 60,
    longBreak: 15 * 60,
  };

  // Function to update timer based on selected mode
  const startTimer = (selectedMode) => {
    setMode(selectedMode);
    setTime(intervals[selectedMode]);
    setIsActive(true);
  };

  // Effect for countdown
  useEffect(() => {
    let interval = null;
    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      clearInterval(interval);
      setIsActive(false);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  // Format time display
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <div className="pomodoro-container">
      <div className="timer-box">
        <h2>{mode === "work" ? "Work" : mode === "shortBreak" ? "Short Break" : "Long Break"} Timer</h2>
        <div className="timer">{formatTime(time)}</div>
        
        {/* Custom Work Time Input */}
        {mode === "work" && (
          <div className="custom-time-input">
            <label>Set Work Time (mins):</label>
            <input
              type="number"
              min="1"
              value={customWorkTime}
              onChange={(e) => setCustomWorkTime(e.target.value)}
            />
          </div>
        )}
        
        <div className="pomodoro-controls">
          <button onClick={() => startTimer("work")}>Work</button>
          <button onClick={() => startTimer("shortBreak")}>Short Break</button>
          <button onClick={() => startTimer("longBreak")}>Long Break</button>
          <button onClick={() => setIsActive(!isActive)}>
            {isActive ? "Pause" : "Resume"}
          </button>
          <button onClick={() => {
            setIsActive(false);
            setTime(intervals[mode]);
          }}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default PomodoroTimer;
