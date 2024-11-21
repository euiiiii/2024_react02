import React, { useCallback, useState } from 'react';
import Light from './Light';

// useCallBack은 useMemo와 같이 메모이제이션을 한다. => 어떤 값을 저장시킨다.
// useMemo는 값을 저장, useCallBack은 함수를 저장한다.
// useCallBack은 함수를 저장하기 때문에 불필요한 함수를 다시 생성하는 것을 방지하는 역할
// 특히 자식 컴포넌트에 props로 함수를 전달할 때, 함수가 의존성 배열에 포함될 때 유용하다.
// ** 자식한테 setter를 집어 넣을 때 사용된다.

function CallBackTest01(props) {
  const [masterOn, setMasterOn] = useState(false)
  const [kitchenOn, setKitchenOn] = useState(false)
  const [bathOn, setBathOn] = useState(false)

  // const toggleMaster = () => setMasterOn(!masterOn);
  // const toggleKitchen = () => setKitchenOn(!kitchenOn);
  // const toggleBath = () => setBathOn(!bathOn);

  // 의존성이 될 때만 실행이 되고 되지 않으면 실행이 되지 않는다.
  // callback을 쓰면 함수 자체를 저장해둔다.
  // 값이면 memo고 , 함수면 callback이다. 
  const toggleMaster = useCallback(() => setMasterOn(!masterOn), [masterOn]);
  const toggleKitchen = useCallback(() => setKitchenOn(!kitchenOn), [kitchenOn]);
  const toggleBath = useCallback(() => setBathOn(!bathOn), [bathOn]);


  console.log("렌더링");
  return (
    <div>
      {/* Light는 자식 컴포넌트 */}
      <Light room="침실" on={masterOn} toggle={toggleMaster} />
      <Light room="주방" on={kitchenOn} toggle={toggleKitchen} />
      <Light room="욕실" on={bathOn} toggle={toggleBath} />
    </div>
  );
}

export default CallBackTest01;