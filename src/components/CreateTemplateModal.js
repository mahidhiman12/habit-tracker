import React, { useState } from 'react';
import './CreateTemplateModal.css';

const CreateTemplateModal = ({ showModal, closeModal, saveTemplate }) => {
  const [templateName, setTemplateName] = useState('');
  const [templateDescription, setTemplateDescription] = useState('');
  const [templateType, setTemplateType] = useState('habit-tracker'); // Default to Habit Tracker

  const handleSaveTemplate = () => {
    if (templateName && templateDescription) {
      const newTemplate = {
        id: Date.now(), // Unique ID based on current timestamp
        name: templateName,
        description: templateDescription,
        type: templateType,
      };
      saveTemplate(newTemplate);
      closeModal(); // Close the modal after saving
    }
  };

  return (
    showModal && (
      <div className="modal-overlay">
        <div className="modal-content">
          <h2>Create New Template</h2>
          <div className="input-group">
            <label htmlFor="template-name">Template Name:</label>
            <input
              type="text"
              id="template-name"
              value={templateName}
              onChange={(e) => setTemplateName(e.target.value)}
              placeholder="Enter template name"
            />
          </div>

          <div className="input-group">
            <label htmlFor="template-description">Description:</label>
            <textarea
              id="template-description"
              value={templateDescription}
              onChange={(e) => setTemplateDescription(e.target.value)}
              placeholder="Enter template description"
            />
          </div>

          <div className="input-group">
            <label htmlFor="template-type">Template Type:</label>
            <select
              id="template-type"
              value={templateType}
              onChange={(e) => setTemplateType(e.target.value)}
            >
              <option value="habit-tracker">Habit Tracker</option>
              <option value="pomodoro">Pomodoro Timer</option>
              <option value="mood-tracker">Mood Tracker</option>
            </select>
          </div>

          <div className="modal-actions">
            <button className="cancel-btn" onClick={closeModal}>
              Cancel
            </button>
            <button className="save-btn" onClick={handleSaveTemplate}>
              Save Template
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default CreateTemplateModal;
