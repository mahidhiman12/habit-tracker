import React, { useState, useEffect } from 'react';

const PomodoroPreview = () => {
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((prevTime) => prevTime - 1), 1000);
    } else if (timeLeft === 0) {
      clearInterval(timer);
      alert('Pomodoro session complete!');
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const resetTimer = () => {
    setTimeLeft(25 * 60); // Reset to 25 minutes
    setIsRunning(false);
  };

  return (
    <div className="pomodoro-preview">
      <h4>Pomodoro Timer Preview</h4>
      <div className="timer">
        <h5>{Math.floor(timeLeft / 60)}:{timeLeft % 60}</h5>
        <button onClick={startTimer} disabled={isRunning}>Start Timer</button>
        <button onClick={resetTimer}>Reset Timer</button>
      </div>
    </div>
  );
};

export default PomodoroPreview;
