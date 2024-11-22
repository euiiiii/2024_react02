import React, { useReducer } from 'react';

/*
  useReducer
  - React에서 상태관리 훅, 복잡한 상태 변화를 더 명확하고 예측 가능하게 관리할 수 있도록 도와준다.
  - 상태관리 로직을 컴포넌트에서 분리하여 코드 가독성을 높인다.

  - Reducer: state를 업데이트 하는 함수
  - Dispacth: state 업데이트를 위한 요구를 하는 것
  - Action: 요구의 내용(행위 자체의 상테를 어떻게 바꿔 주는 지), type과 payload가 있다.

  Dispatch(Action) -> Reducer(State, Action) -> State를 Update
*/

function reducer( state, action ) {
  switch(action.type) {
    case "add" : 
        return state + action.payload ; // 현재 상태 (state)에 payload 더하기
    case "sub" : 
        return state - action.payload ; // 현재 상태 (state)에 payload 빼기
    case "reset" : 
        return 0 ;
  }
}

function ReducerTest01(props) {
  // ** useReducer(위에 reducer 함수 이름, state 초기값)
  const [number, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <p>Count: {number} </p>
      {/* 구분하기 위해서 type이 존재한다. payload: 액션이나 요청에 포함되는 데이터 또는 정보를 의미 */}
      {/* type이 서블릿에서 cmd 역할을 한다. 그래서 switch case문 사용하면 된다. */}
      <button onClick={() => dispatch({ type: "add" , payload : 1})}> + </button>
      <button onClick={() => dispatch({ type: "sub" , payload : 1 })}> - </button>
      <button onClick={() => dispatch({ type: "reset"  })}> Reset </button>
    </div>
  );
}

export default ReducerTest01;