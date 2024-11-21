import React, { useState } from 'react';

function MemoTest02_2(props) {
  console.log("컴포넌트")
  const [query, setQuery] = useState("")
  const itmes = ["apple", "banana", "cherry", "date", "elgerberry", "fig", "grape"]

  const filterItem = itmes.filter((k)=>{
    console.log("필터") // a를 집어 넣어도 7 나옴 얘는 무조건 7번 다 돌린다.
    return k.toLowerCase().includes(query.toLowerCase());
  })
  return (
    <div>
      <h3>Memo 미사용 예제</h3>
      <input
        type='text' 
        value={query}
        onChange={(e)=>setQuery(e.target.value)}
      />
      <ul>
          {filterItem.map((k, index) => (
            <li key={index}>{k}</li>
          ))}
      </ul>
    </div>
  );
}

export default MemoTest02_2;