import React, { useState } from 'react';
import Page from './Page';
import './Context.css';
import { ThemeContext } from '../../context/ThemeContext';
import { UserInfoContext } from '../../context/UserInfoContext';

/*
  React Context: 컴포넌트 계층 구조 전체에서 전달할 때 여러 단계의 Props 전달을 피하기 위한 방법
                즉, 상위 컴포넌트에서 하위 컴포넌트로 데이터를 전달할 때, props를 거치지 않고 데이터 공유
  주요 사용: 테마, 사용자 인증, 다국어 지원
  단점: Context 값이 변경되면 모든 하위 컴포넌트가 재렌더링 되어야 한다.
        복잡한 상태 관리하는 데는 부적절, 디버깅이 어렵다.


  실행 순서
  - 1. src-context 폴더 안에 XXXContext 파일 생성
  - 2. data를 보내고자 하는 컴포넌트 최상위 컴포넌트를 XXXContext.Provider로 감싼다.
*/
function ContextTest(props) {
  const [isDark, setIsDark] = useState(false);
  return (
    <UserInfoContext.Provider value={"사용자"}>
      {/* Page의 자식 컴포넌트들은 isDark와 setIsDark를 자유롭게 사용할 수 있다. */}
      <ThemeContext.Provider value={{isDark, setIsDark}}>
        <Page />
      </ThemeContext.Provider>
    </UserInfoContext.Provider>
  );
}

export default ContextTest;