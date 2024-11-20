import React, { useState } from 'react';
import Profile from './Profile';

function ProfileEx({name}) {
  const users = ['홍길동', '고길동', '둘리', '희동이']
  const [user, setUser] = useState(users[0]);
  const [isStatus, setStatus] = useState(true);
  return (
    <div>
      <h2>User Profile</h2>
      <button onClick={() => setStatus(!isStatus)}>Toggle Status</button> &nbsp;
      <button onClick={() => setUser(
        users[(users.indexOf(user)+1) % users.length]
      )}>Switch user</button>
      <p>
        상태: {isStatus ? 'Active' : 'Inactive'}
      </p>
      <Profile name={user} />
    </div>
  );
}

export default ProfileEx;