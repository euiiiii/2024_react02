import React, { useEffect, useMemo, useState } from 'react';

function MemoTest04(props) {
  console.log("컴포넌트 호출"); // 컴포넌트 호출되면서 렌더링 됨
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  // input을 누르면 location이 아니므로 useEffect 내용 출력 안 됨
  // 1. 기본 자료형에는 값이 저장된다.
  // const location = isKorea ? '한국' : '외국';
  // useEffect(()=> {
  //   console.log('useEffect 호출');
  // }, [location]);

  // 2. 객체: 렌더링 되면서 객체가 생성되고 생성된 객체의 주소가 변경된다.
  // 객체: 자바에서 new 하면 주소가 바뀌듯이 그런 개념임
  // 렌더링 하면서 location의 객체를 따로 생성 => locaton 주소값이 변경된다. 이유는 country가 객체라서 그럼
  // const location = {
  //   country : isKorea ? '한국' : '외국'
  // };

  // 3. Memo를 사용하자
  const location = useMemo(() => {
    return{
      country : isKorea ? '한국' : '외국'
    };
  }, [isKorea]);

  useEffect(()=> {
    console.log('useEffect 호출');
  }, [location]);

  

  return (
    <div>
      <h2>하루에 몇 끼 먹어요?</h2>
      <input
        type='number' 
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <hr />
      <h2>어느 나라 사람에 있나요?</h2>
      <p>나라: {location.country} </p>
      <button onClick={() => setIsKorea(!isKorea)}>비행기 타자</button>
    </div>
  );
}

export default MemoTest04;