import React from 'react';
import './TodoItem.css';

function TodoItem({ text, completed, onCompleted, onDelete}) {


  return (
    <li className="TodoItem">
      <span onClick={onCompleted} className={`Icon Icon-check ${completed && 'Icon-check--active'}`}>
        <i className='bx bx-check' ></i>
      </span>
      <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>
        {text}
      </p>
      <span onClick={onDelete} type='button' className="Icon Icon-delete">
        <i className='bx bx-trash'></i>
      </span>
    </li>
  );
}

export { TodoItem };
