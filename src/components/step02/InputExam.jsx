import React from 'react';
import './InputExam.css';
import { TextField } from '@mui/material';

function InputExam(props) {
  return (
    <div className='center'>
      <input onFocus={()=>console.log('onFocus')} 
            onBlur={()=>console.log('onBlur')} /><br /><br />

      {/* id는 id값 꺼내다 쓸 때 필요 */}
      {/* 해당 입력요소의 값이 바뀔 때 발생, target은 이벤트가 발생한 요소를 가르킨다. */}
      <TextField id="outlined-basic" label="Outlined" variant="outlined" 
                onChange={(e) => console.log(e.target.value)}
      /><br /><br />
      <TextField id="standard-basic" label="Standard" variant="standard" 
                onKeyUp={(e) => console.log(e.key, 'UP')}
      /><br /><br />
    </div>
  );
}

export default InputExam;