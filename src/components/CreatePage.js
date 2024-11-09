// CreatePage.js
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './CreatePage.css';

const CreatePage = () => {
  const { notebookId } = useParams();
  const [pageTitle, setPageTitle] = useState('');
  const [pageContent, setPageContent] = useState('');
  const navigate = useNavigate();

  const handleSavePage = () => {
    alert('Page Saved!');
    navigate(`/notebooks/${notebookId}`); // Redirect back to notebook detail
  };

  return (
    <div className="create-page">
      <h1>Create New Page</h1>
      <input
        type="text"
        value={pageTitle}
        onChange={(e) => setPageTitle(e.target.value)}
        placeholder="Page Title"
      />
      <textarea
        value={pageContent}
        onChange={(e) => setPageContent(e.target.value)}
        placeholder="Page Content"
      />
      <button onClick={handleSavePage}>Save Page</button>
    </div>
  );
};

export default CreatePage;
