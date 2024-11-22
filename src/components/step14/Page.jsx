import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

// props가 없어서 받을 게 없음
// 최종 중요 단계에서만 꺼내서 쓰면 됨
function Page() {
  return (
    <div className='page'>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default Page;