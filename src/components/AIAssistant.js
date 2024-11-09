// import React, { useState, useEffect } from 'react';

// const AIAssistant = ({ tasks }) => {
//   const [suggestion, setSuggestion] = useState('');
//   const [isPopupVisible, setIsPopupVisible] = useState(false);


//   const analyzeTasks = (tasks) => {
//     if (!tasks || tasks.length === 0) {
//       return "You haven't completed any tasks yet. Let's get started!";
//     }

//     const completedTasksCount = tasks.reduce((acc, task) => acc + (task.completed ? 1 : 0), 0);
//     const totalTasks = tasks.length;
//     const completionRate = (completedTasksCount / totalTasks) * 100;

//     if (completionRate > 80) {
//       return "Great job! You've completed most of your tasks. Keep it up!";
//     } else if (completionRate > 50) {
//       return "You're doing okay! Try to stay consistent.";
//     } else {
//       return "It looks like you may need to focus more on completing your tasks.";
//     }
//   };

//   useEffect(() => {
//     const newSuggestion = analyzeTasks(tasks);
//     setSuggestion(newSuggestion);
//   }, [tasks]); 

//   const togglePopup = () => {
//     setIsPopupVisible(!isPopupVisible);
//   };

//   return (
//     <>
//       <div className="ai-assistant-button" onClick={togglePopup}>
//         🤖
//       </div>

//       {isPopupVisible && (
//         <div className="ai-assistant-popup">
//           <h3>AI Assistant</h3>
//           <p>{suggestion}</p>
//         </div>
//       )}
//     </>
//   );
// };

// export default AIAssistant;


import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './AIAssistant.css';  // Make sure to import your CSS file

const AIAssistant = ({ tasks }) => {
  const [suggestion, setSuggestion] = useState('');

  // Function to analyze task completion patterns and give suggestions
  const analyzeTasks = (tasks) => {
    if (!tasks || tasks.length === 0) {
      return "You haven't completed any tasks yet. Let's get started!";
    }

    const completedTasksCount = tasks.reduce((acc, task) => acc + (task.completed ? 1 : 0), 0);
    const totalTasks = tasks.length;
    const completionRate = (completedTasksCount / totalTasks) * 100;

    if (completionRate > 80) {
      return "Great job! You've completed most of your tasks. Keep it up!";
    } else if (completionRate > 50) {
      return "You're doing okay! Try to stay consistent.";
    } else {
      return "It looks like you may need to focus more on completing your tasks.";
    }
  };

  useEffect(() => {
    const newSuggestion = analyzeTasks(tasks);
    setSuggestion(newSuggestion);
  }, [tasks]); // Re-run when tasks change

  const handleIconClick = () => {
    // Show the pop-up message with a toast notification
    toast.success(suggestion, {
      position: "top-right",
      autoClose: 5000, // Duration for the toast message
      hideProgressBar: true,
    });
  };

  return (
    <div>
      <div
        className="ai-assistant-button"
        onClick={handleIconClick}
      >
        🤖 {/* AI Icon */}
      </div>

      {/* Toast container for notifications */}
      <ToastContainer />
    </div>
  );
};

export default AIAssistant;
