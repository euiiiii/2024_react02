import React, { useEffect, useRef } from 'react';

function RefTest05(props) {
  const inputRef = useRef();

  // 맨 처음 한 번만 실행할 때는 의존성 배열이 [] 이다.
  useEffect(() => {
    inputRef.current.focus();
  },[]);

  const login = () => {
    const inputValue = inputRef.current.value;
    alert(`${inputValue}님, 환영합니다.`);
    inputRef.current.focus();
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      login(); // Enter일 때만 login 함수 호출
    }
  }

  return (
    <div>
      <input 
        type='text' 
        placeholder='userName'
        ref={inputRef} // input이 가지고 있는 속성 
        onKeyDown={handleKeyDown} // 키 이벤트
      />
      <button onClick={login}>로그인</button>
    </div>
  );
}

export default RefTest05;