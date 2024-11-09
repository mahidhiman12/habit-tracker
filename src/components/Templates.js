import React, { useState } from 'react';
import './Templates.css';
import CreateTemplateModal from './CreateTemplateModal'; // Import the new modal component

const Templates = () => {
  const predefinedTemplates = [
    { id: 1, name: 'Basic Habit Tracker', description: 'Track your daily habits.', type: 'habit-tracker' },
    { id: 2, name: 'Pomodoro Focus Timer', description: 'Stay focused with Pomodoro technique.', type: 'pomodoro' },
    { id: 3, name: 'Mood Tracker', description: 'Track and analyze your mood.', type: 'mood-tracker' },
  ];

  const [dashboard, setDashboard] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleTemplateSelect = (template) => {
    console.log(template);
  };

  const saveTemplate = (newTemplate) => {
    setDashboard([...dashboard, newTemplate]);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="templates-page">
      <h1>Available Templates</h1>
      <div className="templates-list">
        {predefinedTemplates.map((template) => (
          <div
            key={template.id}
            className="template-item"
            onClick={() => handleTemplateSelect(template)}
          >
            <h3>{template.name}</h3>
            <p>{template.description}</p>
            <button>Preview</button>
          </div>
        ))}
      </div>

      <div className="create-template">
        <button onClick={() => setShowModal(true)}>Create New Template</button>
      </div>

      {/* Modal for creating a new template */}
      <CreateTemplateModal showModal={showModal} closeModal={closeModal} saveTemplate={saveTemplate} />

      <div className="saved-templates">
        <h3>Your Dashboard</h3>
        {dashboard.length > 0 ? (
          <div className="dashboard-grid">
            {dashboard.map((template) => (
              <div key={template.id} className="dashboard-card">
                <h4>{template.name}</h4>
                <p>{template.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No templates saved yet.</p>
        )}
      </div>
    </div>
  );
};

export default Templates;
