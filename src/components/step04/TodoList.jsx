import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

function TodoList(props) {
  const [todos, setTodos] = useState(['Learn React',  'Build a project']);
  const [newTodo, setNewTodo] = useState('');

  // 리스트에서 삭제
  const deleteTodo = (index)=>{
    // (_, i) => filter 메서드의 콜백 함수 매개변수
    // 첫 번째 매개변수 _ 는 배열의 각 요소를 의미(지금은 사용하지 않으므로 _ 사용)
    // 두 번째 매개변수 i는 인덱스를 의미한다.
    setTodos(todos.filter((_,i) => i !== index));
  }

  // 삽입
  const addTodo = () => {
    if (newTodo.trim !== '') {
      // 기존 todos 배열에 새로운 정보를 가진 newTodo를 추가한다.
      setTodos([...todos , newTodo.trim()])
      setNewTodo(''); // 입력 다 되면 값 초기화
    }
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
            {k}&nbsp; &nbsp; 
            <button onClick={()=>deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <p>Typing: {newTodo} </p>
      <input 
        type='text' 
        value={newTodo}
        onChange={(e)=>setNewTodo(e.target.value)} // 랜더링이 다시 되니까 setNewTodo에 값이 변경된다.
        /> &nbsp; &nbsp; &nbsp; &nbsp;
      <Button variant="contained" onClick={addTodo}>Add New Task</Button>
    </div>
  );
}

export default TodoList;