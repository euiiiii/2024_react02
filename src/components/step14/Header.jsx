import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { UserInfoContext } from '../../context/UserInfoContext';

// 받은 건 없지만 꺼내서 와야함
function Header() {
  const {isDark} = useContext(ThemeContext);
  const user = useContext(UserInfoContext);
  return (
    <header
      className='header'
      style={{
        backgroundColor: isDark ? 'black' : 'lightgray',
        color : isDark ? 'white' : 'black'
      }}
    >
      <h1>Welcome {user}</h1>
    </header>
  );
}

export default Header;