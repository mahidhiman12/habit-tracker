// import React from 'react';
// import './App.css';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import HabitTracker from './components/HabitTracker';
// import BoardPage from './components/BoardPage';

// const App = () => {
//   return (
//     <Router>
//       <div className="app-container">
//         <div className="sidebar">
//           <h2>Habit Tracker</h2>
//           <Link to="/habits">Habits</Link>
//           <Link to="/boards">Boards</Link>
//         </div>

//         <div className="main-content">
//           <Routes>
//             <Route path="/habits" element={<HabitTracker />} />
//             <Route path="/boards" element={<BoardPage />} />
//             <Route path="/" element={<h1>Welcome to Habit Tracker</h1>} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// };

// export default App;



// import React from 'react';
// import './App.css';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import HabitTracker from './components/HabitTracker';
// import BoardPage from './components/BoardPage';

// const App = () => {
//   return (
//     <Router>
//       <div className="app-container">
//         <div className="sidebar">
//           <h2>Habit Tracker</h2>
//           <Link to="/habits">Habits</Link>
//           <Link to="/boards">Boards</Link>
//         </div>

//         <div className="main-content">
//           <Routes>
//             <Route path="/habits" element={<HabitTracker />} />
//             <Route path="/boards" element={<h1>Boards</h1>} />
//             {/* This will route to a dynamic board page */}
//             <Route path="/boards/:boardId" element={<BoardPage />} />
//             <Route path="/" element={<h1>Welcome to Habit Tracker</h1>} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// };

// export default App;




// import React from 'react';
// import './App.css';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import HabitTracker from './components/HabitTracker';
// import BoardPage from './components/BoardPage';
// import Boards from './components/Boards';

// const App = () => {
//   return (
//     <Router>
//       <div className="app-container">
//         <div className="sidebar">
//           <h2>Habit Tracker</h2>
//           <Link to="/habits">Habits</Link>
//           <Link to="/boards">Boards</Link>
//         </div>

//         <div className="main-content">
//           <Routes>
//             <Route path="/habits" element={<HabitTracker />} />
//             <Route path="/boards" element={<Boards />} />
//             {/* Dynamically render the BoardPage */}
//             <Route path="/boards/:boardId" element={<BoardPage />} />
//             <Route path="/" element={<h1>Welcome to Habit Tracker</h1>} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// };

// export default App;



// import React from 'react';
// import './App.css';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import HabitTracker from './components/HabitTracker';
// import BoardPage from './components/BoardPage';
// import PomodoroTimer from './components/PomodoroTimer';
// import MoodTracker from './components/MoodTracker'; 

// const App = () => {
//   return (
//     <Router>
//       <div className="app-container">
//         <div className="sidebar">
//           <h2>Habit Tracker</h2>
//           <Link to="/habits">Habits</Link>
//           <Link to="/boards">Boards</Link>
//           <Link to="/pomodoro">Pomodoro Timer</Link>
//           <Link to="/mood">Mood Tracker</Link> 
//         </div>

//         <div className="main-content">
//           <Routes>
//             <Route path="/habits" element={<HabitTracker />} />
//             <Route path="/boards" element={<BoardPage />} />
//             <Route path="/pomodoro" element={<PomodoroTimer />} />
//             <Route path="/mood" element={<MoodTracker />} /> 
//             <Route path="/" element={<h1>Welcome to Habit Tracker</h1>} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// };

// export default App;




import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HabitTracker from './components/HabitTracker';
import BoardPage from './components/BoardPage';
import PomodoroTimer from './components/PomodoroTimer';
import MoodTracker from './components/MoodTracker'; // Import MoodTracker
import AIAssistant from './components/AIAssistant'; // Import AI Assistant component
import Templates from './components/Templates'; // Import AI Assistant component

const App = () => {
  // Sample tasks data for demonstration
  const [tasks, setTasks] = useState([
    { id: 1, description: 'Complete React Project', completed: true },
    { id: 2, description: 'Write Blog Post', completed: false },
    { id: 3, description: 'Exercise for 30 minutes', completed: true },
  ]);

  return (
    <Router>
      <div className="app-container">
        <div className="sidebar">
          <h2>Habit Tracker</h2>
          <Link to="/habits">Habits</Link>
          <Link to="/boards">Boards</Link>
          <Link to="/pomodoro">Pomodoro Timer</Link>
          <Link to="/mood">Mood Tracker</Link>
          <Link to="/Templates">Templates</Link>
        </div>

        <div className="main-content">
          {/* Pass tasks data to the AI Assistant */}
          <AIAssistant tasks={tasks} />

          <Routes>
            <Route path="/habits" element={<HabitTracker />} />
            <Route path="/boards" element={<BoardPage />} />
            <Route path="/pomodoro" element={<PomodoroTimer />} />
            <Route path="/mood" element={<MoodTracker />} />
            <Route path="/Templates" element={<Templates />} />
            <Route path="/" element={<h1>Welcome to Habit Tracker</h1>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;








