import React from 'react';
import './Modal.css'; // Style for the modal

const Modal = ({ showModal, closeModal, saveToDashboard, children }) => {
  if (!showModal) return null; // Don't render the modal if it's not visible

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={closeModal}>X</button>
        <div className="modal-body">
          {children}

          {/* Save and Close buttons */}
          <div className="modal-actions">
            <button className="save-btn" onClick={saveToDashboard}>Save to Dashboard</button>
            <button className="close-btn" onClick={closeModal}>Close Preview</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
