import { setRef } from '@mui/material';
import React, { useRef, useState } from 'react';

/* 
  useRef
  - 저장공간 또는 DOM 요소에 접근하기 위해 사용되는 React Hook이다. reference, 참조를 뜻함
  - 특정한 DOM 요소에 접근 가능하면, 불필요한 재렌더링을 하지 않는다는 장점이 있다.
  1. 값의 유지: 값의 변화를 추적하지만 값이 변경되더라도 렌더링이 되지 않는다.
                불필요한 렌더링 방지
  2. DOM 요소 참조: focus()
*/
function RefTest01(props) {
  const [count, setCount] = useState(0);
  const countRef = useRef(5); // useRef는 리로딩이 되지 않아서 화면단에서는 값이 바뀌지 않음
  // Ref의 값을 호출할 때는 current(현재값 기억)
  console.log("count: ", count, "countRef: ", countRef.current);

  const statePlus = () => {
    setCount(count+1);
  }

  const refPlus = () => {
    countRef.current = countRef.current + 1;
    console.log("count-안: ", count, "countRef-안: " + countRef.current)
  }

  return (
    <div>
      <p>State : {count} </p>
      <p>Ref : {countRef.current} </p>
      {/* 1. 함수 방식 => State 버튼 누르면 화면이 리렌더링 됨*/}
      {/* <button onClick={() => setCount(count+1)}>State 올려</button> */}
      {/* 2. 함수를 만들어서 호출 */}
      <button onClick={statePlus}>State 올려</button>

      {/* useRef는 렌더링을 하지 않아서 화면 숫자는 그대로 */}
      <button onClick={refPlus}>Ref 올려</button>
    </div>
  );
}

export default RefTest01;