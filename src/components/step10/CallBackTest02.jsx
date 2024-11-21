import React, { useCallback, useEffect, useState } from 'react';

function CallBackTest02(props) {
  const [number, setNumber] = useState(0);

  // useEffect의 input에서 증가/감소 클릭할 때마다 리렌더링이 되면서
  //someFunction의 객체(함수) 새로 생성되면서 변경된 것을 감지한다.
  // const someFunction = () => {
  //   console.log(`someFunc: number: ${number}`);
  //   return;
  // }

  // useCallBack은 함수 자체(전체)를 저장
  // 버튼을 누르면 someFunc : number : 0 나온다. => 이유: useCallBack이 저장할 당시 number==0
  // 저장된 거 자체를 출력하기 때문에 콘솔에서 0을 반환한다.
  // const someFunction = useCallback(() => {
  //   console.log(`someFunc: number: ${number}`);
  //   return;
  // }, []);

  // 해결책이 [number]를 넣어주는 것이다.
  const someFunction = useCallback(() => {
    console.log(`someFunc: number: ${number}`);
    return;
  }, [number]);

  // 함수는 누를 때마다 주소값이 변경됨 => 그래서 someFunction이 변경됐다고 감지함
  useEffect(() => {
    console.log("someFunc 변경 되었네요")
  }, [someFunction]);

  return (
    <div>
      <input
        type='number' 
        value={number} 
        onChange={(e)=>setNumber(e.target.value)}
      />
      <br />
      <button onClick={someFunction}>someFunction 호출</button>
    </div>
  );
}

export default CallBackTest02;