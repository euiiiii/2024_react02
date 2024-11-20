import React, { useState } from 'react';

function FormEx(props) {
  const [username, setUsername] = useState("");
  const [isSubscribe, setSubscribe] = useState(false);
  const roles = ['user', 'admin', 'guest'];
  const [role, setRole] = useState(roles[0]);
  return (
    <form>
      <p>Name: {username} {isSubscribe && '(Subscribed)'} </p>
      <p>Role: {role} </p>
      <p>
        <input 
          type='text' 
          placeholder='UserName' 
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      </p>
      <p>
        <input 
          type='checkbox' 
          checked={isSubscribe}
          onChange={e => setSubscribe(e.target.checked)}
        />
        <label>Subscribe</label>
      </p>
      <p>
        <select 
          value={role} 
          onChange={e => setRole(e.target.value)}>
          {roles.map((k) => (<option key={k} value={k}>{k}</option>))}
        </select>
      </p>
    </form>
  );
}

export default FormEx;