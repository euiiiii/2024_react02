import { Button } from '@mui/material';
import React from 'react';

function NumberCounter(props) {
  function handleClick() {
    console.log('Event1');
  }
  return (
    <div>
      {/* 첫 글자 대문자면 components 그래서 import를 해줘야 함 */}
      <Button variant="contained" onClick={handleClick}>버튼1</Button> <br /><br />
      {/* Event에서 () => 이런 식으로 아래를 제일 많이 쓴다고 하셨음 */}
      <Button variant="outlined" onClick={()=>{console.log('Event2')}}>버튼2</Button> <br /><br />
    </div>
  );
}

export default NumberCounter;