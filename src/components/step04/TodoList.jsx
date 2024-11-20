import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

function TodoList(props) {
  const [todos, setTodos] = useState(['Learn React',  'Build a project']);
  const deleteTodo = (index)=>{
    // (_, i) => filter 메서드의 콜백 함수 매개변수
    // 첫 번째 매개변수 _ 는 배열의 각 요소를 의미(지금은 사용하지 않으므로 _ 사용)
    // 두 번째 매개변수 i는 인덱스를 의미한다.
    setTodos(todos.filter((_,i) => i !== index));
  }
  return (
    <div>
      <h1>Todo list</h1>
      <ul>
        {/* 
        <li>Learn React {''}<Button variant="contained">Delete</Button></li>
        <li>Build a project {''}<Button variant="contained">Delete</Button></li>
        */}
        {todos.map((k, index) => (
          <li key={index}>
            {k}{'   '}
            <button onClick={()=>deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <p>Typing: </p>
      <input 
        type='text' 
        value
        onChange
        />{'      '}
      <Button variant="contained" onClick>Add New Task</Button>
    </div>
  );
}

export default TodoList;