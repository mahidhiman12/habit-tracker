import React from 'react';
import { Link } from 'react-router-dom';

const Boards = () => {
  const boards = [
    { id: '1', title: 'Personal Goals' },
    { id: '2', title: 'Work Projects' },
  ];

  return (
    <div>
      <h2>Boards</h2>
      <ul>
        {boards.map((board) => (
          <li key={board.id}>
            <Link to={`/boards/${board.id}`}>{board.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Boards;
