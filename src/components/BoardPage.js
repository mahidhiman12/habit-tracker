import React, { useState } from 'react';
import './BoardPage.css';

const BoardPage = () => {
  const [boards, setBoards] = useState([]);
  const [boardTitle, setBoardTitle] = useState("");
  const [tasks, setTasks] = useState({});
  const [taskInput, setTaskInput] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const handleCreateBoard = () => {
    if (boardTitle) {
      const newBoard = {
        id: Date.now(),
        title: boardTitle,
        tasks: [],
      };
      setBoards([...boards, newBoard]);
      setBoardTitle("");
    }
  };

  const handleCreateTask = (boardId) => {
    if (taskInput && taskDescription) {
      const newTask = {
        id: Date.now(),
        name: taskInput,
        description: taskDescription,
      };
      const updatedBoards = boards.map(board => {
        if (board.id === boardId) {
          board.tasks.push(newTask);
        }
        return board;
      });
      setBoards(updatedBoards);
      setTaskInput("");
      setTaskDescription("");
    }
  };

  return (
    <div className="board-page">
      <h2>Create a Board</h2>
      <div className="create-board">
        <input
          type="text"
          value={boardTitle}
          onChange={(e) => setBoardTitle(e.target.value)}
          placeholder="Enter board title"
        />
        <button onClick={handleCreateBoard}>Create Board</button>
      </div>

      <div className="boards-list">
        {boards.length === 0 ? (
          <p>No boards created yet. Start by creating one!</p>
        ) : (
          boards.map((board) => (
            <div key={board.id} className="board-item">
              <h3>{board.title}</h3>

              <div className="tasks-list">
                <div className="add-task">
                  <input
                    type="text"
                    value={taskInput}
                    onChange={(e) => setTaskInput(e.target.value)}
                    placeholder="Task Name"
                  />
                  <input
                    type="text"
                    value={taskDescription}
                    onChange={(e) => setTaskDescription(e.target.value)}
                    placeholder="Task Description"
                  />
                  <button onClick={() => handleCreateTask(board.id)}>Add Board</button>
                </div>

                <div className="task-cards">
                  {board.tasks.map((task) => (
                    <div key={task.id} className="task-card">
                      <h4>{task.name}</h4>
                      <p>{task.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BoardPage;
