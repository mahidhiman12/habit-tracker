import React, { useState } from 'react';

const MoodTrackerPreview = () => {
  const [mood, setMood] = useState('');

  const handleMoodChange = (event) => {
    setMood(event.target.value);
  };

  return (
    <div className="mood-tracker-preview">
      <h4>Mood Tracker Preview</h4>
      <label>
        Select your mood today:
        <select value={mood} onChange={handleMoodChange}>
          <option value="">Select Mood</option>
          <option value="Happy">Happy</option>
          <option value="Sad">Sad</option>
          <option value="Neutral">Neutral</option>
          <option value="Stressed">Stressed</option>
        </select>
      </label>
    </div>
  );
};

export default MoodTrackerPreview;
