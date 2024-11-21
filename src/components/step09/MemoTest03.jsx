import React, { useMemo, useState } from 'react';

// 컴포넌트에서 const hardCalc가 계속 실행된다.
const hardCalc = (num) => { // num은 항상 1부터 찍힌다.
  console.log("hardCalc : ")
  for (let i = 0; i < 999999999; i++) {}
  return num + 10000;
}

const easyCalc = (num) => { // num은 항상 1부터 찍힌다.
  console.log("esayCalc : ")
  return num + 10000;
}

function MemoTest03(props) {
  // 컴포넌트를 한다는 것은 여기서부터 다시 시작하므로 hard, easy 모두 하기 때문에 느리다.
  // easy 할 때는 hard를 안 하게 하면 된다(?) => 이게 메모리...? ㅇㅋ...
  console.log("컴포넌트") // hardSum, easySum을 둘 다 하기 때문에 easySum도 느릴 수밖에 없다.
  const [hardNumber, setHardNumber] = useState(1);
  const [easyNumber, setEasyNumber] = useState(1);

  // useMem 사용
  // hardNumber 값이 변경될 때만 실행 (렌더링 됨)
  const hardSum = useMemo(()=> {
    return hardCalc(hardNumber);
  }, [hardNumber])

  // const hardSum = hardCalc(hardNumber)
  const easySum = easyCalc(easyNumber)

  return (
    <div>
      <h3>계산기</h3>
      <input type='number' 
        value={hardNumber} 
        onChange={(e) => setHardNumber(parseInt(e.target.value))}
      />
      <span> + 10000 = {hardSum} </span>
      <hr />
      <h3>계산기2</h3>
      <input type='number' 
        value={easyNumber} 
        onChange={(e) => setEasyNumber(parseInt(e.target.value))}
      />
      <span> + 10000 = {easySum} </span>
    </div>
  );
}

export default MemoTest03;