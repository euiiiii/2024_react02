import React, { useMemo, useState } from 'react';

/* 
  useMemo: 컴포넌트가 다시 렌더링 될 때 특정 연산의 재계산을 방지하여 성능을 최적화 하기 위해 사용
  useMemo를 사용하면 불필요한 연산을 피하면서 상태 업데이트를 처리할 수 있음
  사용용도: 불필요한 연산을 캐싱(기억하고 싶을 때)하고 싶을 때, 참조값 비교로 인해 불필요한 렌더링 방지
  두 개의 인수를 받는데 첫 번째 인수는 캐싱하고 싶은 계산(함수)
                        두 번째 인수는 해당 계산이 다시 실행될 조건(의존성 배열)
*/ 
function MemoTest01(props) {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  console.log("컴포넌트 랜더링")

  // useMemo가 없으면 텍스트 입력할 때마다 계산을 해야한다.
  // text 할 때는 계산을 해주지 않기 위해 작성했다.
  // 왜냐면 text는 useMemo에 계산이 안 되며, 컴포넌트 렌더링만 찍힌다.
  const expensiveValue = useMemo(()=>{
    console.log("useMemo 처리") 
    return count + 1000; // 메모에 저장시켜놓고 값을 꺼내 오는 것 그래서 1000이 나온다.
  },[count]);

  return (
    <div>
      <h1>useMemo exam</h1>
      {/* 원래 방식 1 */}
      {/* 계산하고 또 다시 렌더링해서 계산을 한다. */}
      {/* <p>연산값 : {count}</p> */}
      {/* <button onClick={()=>setCount(count+1)}>클릭</button> */}
     
      <p>연산값 : {expensiveValue}</p>
      <p>Typed Text : {text}</p>
      {/* prev는 이전에 가지고 있던 값을 의미한다. */}
      {/* 이전 것에 +1이 된다. */}
      <button onClick={()=>setCount((prev)=>prev+1)}>클릭</button>
      <input 
          type='text'
          value={text}
          onChange={(e)=>setText(e.target.value)}
      /><hr/>
    </div>
  );
}

export default MemoTest01;