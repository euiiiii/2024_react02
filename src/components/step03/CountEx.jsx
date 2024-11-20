import { Button } from '@mui/material';
import React, { useState } from 'react';

function CountEx(props) {
  // 콘솔은 값이 변경되나 화면은 값이 변경되지 않는다.
  // let count = 5;
  // const setCount = (num) => {
  //   count = num
  //   console.log(count);
  // }

  // 값이 변경되서 화면을 재렌더링 할 때 사용
  // useState => state를 업데이트 되면 재렌더링
  // const[5, setCount] 변경된 거 감지하는 것은 setCount이므로 여기에 값을 저장해준다.
  // const [count, setCount] = useState(5);
  // return (
  //   <div>
  //     <h2>Count : {count} </h2>
  //     <Button variant="outlined" 
  //         onClick={()=>setCount(count+1)}
  //     > + </Button>
  //     <Button variant="outlined" 
  //         onClick={()=>setCount(count-1)}
  //     > - </Button>
  //   </div>
  // );

  const [count, setCount] = useState(5);
  const increament = () => setCount(count+1);
  const decreament = () => setCount(count-1);
  return (
    <div>
      <h2>Count : {count} </h2>
      <Button variant="outlined" 
          onClick={increament}
      > + </Button>
      <Button variant="outlined" 
          onClick={decreament}
      > - </Button>
    </div>
  );
}

export default CountEx;