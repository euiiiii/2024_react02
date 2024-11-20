// Btn의 부모 파일
import React from 'react';
import Btn from './Btn';

function NumberCounter2(props) {
  return (
    <div>
      {/* alt 키 누르고 원하는 영역 누르면 원하는 부분 한 꺼번에 사용 가능하다. */}
      <Btn name={'Home'} /> <br /><br />
      <Btn name={'Store'} /> <br /><br />
      <Btn name={'Content'} /> <br /><br />
    </div>
  );
}

export default NumberCounter2;