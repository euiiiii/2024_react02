import React, { useMemo, useState } from 'react';

function MemoTest02_1(props) {
  console.log("컴포넌트")
  const [query, setQuery] = useState("")
  const itmes = ["apple", "banana", "cherry", "date", "elgerberry", "fig", "grape"]

  // [query]: query가 변경되면 렌더링이 된다.
  // includes()는 특정값을 포함하고 있으면 true를 반환
  const filterItem = useMemo(() => {
    console.log("useMemo 안")
    return itmes.filter((k) => k.toLowerCase().includes(query.toLowerCase()));
  }, [query]); // []: 이렇게 하면 filter를 하지 않으므로 그냥 그대로가 보인다.
  return (
    <div>
      <h3>Memo 사용 예제</h3>
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

export default MemoTest02_1;