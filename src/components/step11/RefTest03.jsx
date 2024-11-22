import React, { useEffect, useRef, useState } from 'react';

function RefTest03(props) {
  const [count, setCount] = useState(0); // 몇 번 눌렀냐를 기억하려고 씀
  const [count2, setCount2] = useState(0);
  const randCount = useRef(0);

  // 방법1
  // randCount.current = randCount.current + 1;
  // console.log("렌더링 수 : ", randCount.current);

  // 방법2
  // 의존성 배열이 없는 경우: 렌더링 될 때마다 실행된다.
  // 그러나 의존성 배열을 주면 골라서 count할 수 있다.
  // 의존성 배열 없을 때, 렌더링 될 때마다 useEffect 실행
  // 의존성 배열을 넣는 순간 count마다 실행시킬 수 있다.
  useEffect(() => {
    randCount.current = randCount.current + 1;
    console.log("렌더링 수 : ", randCount.current);
  });

  return (
    <div>
      <p>State: {count} </p>
      <button onClick={() => setCount(count+4)}>State 올려</button>
      <button onClick={() => setCount2(count2+3)}>State 올려</button>
    </div>
  );
}

export default RefTest03;