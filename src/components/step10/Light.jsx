import React from 'react';

// 자식
function Light({room, on, toggle}) {
  console.log({room, on});
  return (
    <div>
      <button onClick={toggle}>
        {room} {on ? "💡" : "⬛"}
      </button>
    </div>
  );
}

export default React.memo(Light);