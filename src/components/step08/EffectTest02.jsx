import React, { useEffect, useState } from 'react';

/* 
  useEffect는 리액트에서 제공하는 훅 중 하나로, 
  함수형 컴포넌트에서 Side Effect(사이드 이펙트)를 처리할 수 있도록 도와준다.
  - Side Effect(사이드 이펙트): 컴포넌트의 렌더링 외의 작업(데이터 가져오기, DOM 수정 등)을 의미한다.
  - useEffect: 상태 변경으로 인해 발생한 렌더링 이후에 실행된다.
    - 의존성 배열: useEffect 훅에 입력하는 두 번째 매개변수이며, 특정 값들의 변화를 감지하여 Hook의 동작을 제어하는 역할을 한다.
    의존성 배열을 통해 특정 상태나 속성의 변화에만 반응하도록 제한
    렌더링 수가 적어지면 최적화가 되었다.
    의존성 배열이 없으면 갱신될 때마다 호출
    의존성 배열이 [] 이면 처음 한 번 하고 다시 호출 안 함

  - 형식) 
    useEffect(()=>{
        렌더링 이후에 실행할 작업
        return 화살표 함수는 생략 가능하다.(문법에서 [] 들어가면 생략 가능하다.)
        [return()=>{
          정리 작업(clean-up)
        }]
      }, [의존성 배열1, 의존성 배열2]);
*/
function EffectTest02(props) {
  const [count, setCount] = useState(5);
  // useEffect(() => {
  //   document.title = `총 ${count}번 클릭했습니다.`
  // }, []); // 최초 한 번만 찍힘

  useEffect(() => {
    document.title = `총 ${count}번 클릭했습니다.`
  }, [count]); // 랜더링 후에 실행되므로 title  부분은 동작이 느림
  return (
    <div>
      <p>총 {count}번 출력했습니다.</p>
      <button onClick={() => setCount(count+1)}>클릭</button>
    </div>
  );
}

export default EffectTest02;