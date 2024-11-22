import React, { useEffect, useId, useRef } from 'react';

// useId란 고유한 ID를 생성한다.

function UseIdTest(props) {
  const id = useId();
  const inputRef = useRef();

  const age = useId();
  const ageRef = useRef();

  useEffect(() => {
    // 가져올 수 없다.(useRef 사용)
    // const element = document.querySelector(id);
    // console.log(element);

    const element = inputRef.current;
    console.log(element);

    // const element2  = ageRef.current;
    // console.log(element2);
  }, []);

  return (
    <div>
      {/* 이름을 눌러도 id로 연결된다. 라벨이 있는데 누르면 focus로 찍히게 함 */}
      {/* <label htmlFor={id}>이름</label>
      <input id={id} ref={inputRef} /> */}

      {/* 만약 여러 개일 경우 */}
      {/* <label htmlFor={age}>나이</label>
      <input age={age} ref={ageRef} /> */}

      <label htmlFor={`${id}-name`}>이름</label>
      <input id={`${id}-name`} ref={inputRef} />
      
      <label htmlFor={`${id}-age`}>나이</label>
      <input age={`${id}-age`} ref={ageRef} />

    </div>
  );
}

export default UseIdTest;