// import React, { useState } from 'react';
// import './MoodTracker.css';

// const moods = [
//   { label: 'Happy 😊', color: '#FFD700' },
//   { label: 'Sad 😢', color: '#87CEFA' },
//   { label: 'Excited 😆', color: '#FF6347' },
//   { label: 'Calm 😌', color: '#98FB98' },
//   { label: 'Anxious 😬', color: '#FFA07A' },
//   { label: 'Tired 😴', color: '#D3D3D3' }
// ];

// const MoodTracker = () => {
//   const [selectedMood, setSelectedMood] = useState(null);
//   const [description, setDescription] = useState('');
//   const [moodLog, setMoodLog] = useState([]);

//   const handleSaveMood = () => {
//     if (selectedMood && description) {
//       const newEntry = {
//         mood: selectedMood,
//         description,
//         date: new Date().toLocaleDateString()
//       };
//       setMoodLog([newEntry, ...moodLog]); 
//       setSelectedMood(null);
//       setDescription('');
//     }
//   };

//   return (
//     <div className="mood-tracker-container">
//       <h2>How are you feeling today?</h2>
//       <div className="mood-options">
//         {moods.map((mood, index) => (
//           <div
//             key={index}
//             className={`mood-card ${selectedMood === mood.label ? 'selected' : ''}`}
//             style={{ backgroundColor: mood.color }}
//             onClick={() => setSelectedMood(mood.label)}
//           >
//             {mood.label}
//           </div>
//         ))}
//       </div>
      
//       {selectedMood && (
//         <div className="mood-input-section">
//           <textarea
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             placeholder="Why are you feeling this way?"
//             rows="3"
//           />
//           <button onClick={handleSaveMood}>Save Mood</button>
//         </div>
//       )}

//       <h3>Previous Entries</h3>
//       <div className="mood-log">
//         {moodLog.length === 0 ? (
//           <p>No entries yet. Start by logging your mood!</p>
//         ) : (
//           moodLog.map((entry, index) => (
//             <div key={index} className="mood-log-entry">
//               <strong>{entry.mood}</strong> - {entry.date}
//               <p>{entry.description}</p>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default MoodTracker;



import React, { useState } from 'react';
import './MoodTracker.css';

const moods = [
  { label: 'Happy 😊', color: '#FFD700' },
  { label: 'Sad 😢', color: '#87CEFA' },
  { label: 'Excited 😆', color: '#FF6347' },
  { label: 'Calm 😌', color: '#98FB98' },
  { label: 'Anxious 😬', color: '#FFA07A' },
  { label: 'Tired 😴', color: '#D3D3D3' }
];

const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState(null);
  const [description, setDescription] = useState('');
  const [moodLog, setMoodLog] = useState([]);

  const handleSaveMood = () => {
    if (selectedMood && description) {
      const newEntry = {
        mood: selectedMood,
        description,
        date: new Date().toLocaleDateString()
      };
      setMoodLog([newEntry, ...moodLog]); // add to the beginning of the array
      setSelectedMood(null);
      setDescription('');
    }
  };

  return (
    <div className="mood-tracker-container">
      <h2>How are you feeling today?</h2>
      <div className="mood-options">
        {moods.map((mood, index) => (
          <div
            key={index}
            className={`mood-card ${selectedMood === mood.label ? 'selected' : ''}`}
            style={{ backgroundColor: mood.color }}
            onClick={() => setSelectedMood(mood.label)}
          >
            {mood.label}
          </div>
        ))}
      </div>
      
      {selectedMood && (
        <div className="mood-input-section">
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Why are you feeling this way?"
            rows="3"
          />
          <button onClick={handleSaveMood}>Save Mood</button>
        </div>
      )}

      <h3>Previous Entries</h3>
      <div className="mood-log">
        {moodLog.length === 0 ? (
          <p>No entries yet. Start by logging your mood!</p>
        ) : (
          moodLog.map((entry, index) => (
            <div key={index} className="mood-log-entry">
              <strong>{entry.mood}</strong> - {entry.date}
              <p>{entry.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MoodTracker;
