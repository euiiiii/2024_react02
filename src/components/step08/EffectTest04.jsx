import React, { useEffect, useState } from 'react';

function EffectTest04(props) {
  const [data, setData] = useState([]); // api에서 가져온 데이터를 저장
  const [error, setError] = useState(null); // 에러 관리

  useEffect( () => {
    // API 호출
    // 자료 왔다 갔다 하는 것을 routing
    // 서버 갔다 오는 거, then: 성공 시, catch: 실패 시, response≒data(Ajax에 있는 data)
    /* 
      fetch()
      - HTTP  요청을 통해 서버와 데이터를 주고받을 수 있는 기능 제공
      - Promise 기반 요청이 성공하면 데이터를 받고, 실패하면 오류를 반환
      - 주로 REST API와 통신할 때 사용
      fetch('url')
        .then((response) => response.json()) // json 형식으로 파싱
        .then((data) => { 성공했을 때 코드 }) // 데이터 출력
        .catch((error) =. { 실패했을 때 코드 }) // 오류 처리
    */
    fetch('https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
    .then(response => {
      if (!response.ok) { // 로그인 했을 때 성공 시, 200 나오는 거랑 같음 => but, 이건 반대니까!
        throw new Error('Network 오류')
      }
      return response.json(); //  응답 데이터를 json 형태로 변환, 비동기 처리
    })
    // .then((data) => setData(data)) // 위에서 json 형태로 변환된 데이터를 받아 setData로 넘긴다. return 하면 아래 data로 온다.
    .then((data) =>setData(data.slice(0,3))) // 원하는 개수만큼 데이터를 가져온다.
    .catch((error) => setError(error.message))
}, []);
  return (
    <div>
      <ul>
        {data.map((k)=>(
          <li key={k.id}>
            <h3>{k.name}</h3>
            <p>가격: {k.price}</p>
            <img src={k.image_link} width="100px" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EffectTest04;