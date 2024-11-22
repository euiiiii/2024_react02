import React, { useRef, useState } from 'react';

function RefTest02(props) {
  const [rander, setRander] = useState(0);

  const countRef = useRef(0);
  let countVar = 0;

  const refUp = ()=>{
    countRef.current=countRef.current+1;
    console.log("ref : " , countRef.current)  // +와 , 다 가능
  }
  
  const varUp = ()=>{
    countVar=countVar+1;
    console.log("var : " , countVar) // 렌더링이 되는 순간 변수는 0으로 초기화 된다.
  }

  const doRander = ()=>{
    setRander(rander+1); // 아무것도 없지만 렌더링이 된다.
  }
  
  const printResult = () => {
    console.log(`ref:${countRef.current}, var:${countVar}`)
  }

  return (
    <div>
      <p>Ref : {countRef.current}</p>
      <p>Var : {countVar}</p>
      {/* 둘 다 렌더링이 안된다.
          그래서 렌더링 버튼을 만들어 실행하면, ref는 값을 가지고 있으나, var는 렌더링할 때 초기화 돼서 0이 된다.
      */}
      <button onClick={refUp}>Ref 올리기</button> &nbsp;
      <button onClick={varUp}>Var 올리기</button> &nbsp;
      <button onClick={doRander}>렌더링하기(업뎃)</button> &nbsp;
      <button onClick={printResult}>결과 출력</button>
    </div>
  );
}

export default RefTest02;