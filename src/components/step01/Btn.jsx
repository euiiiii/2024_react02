// NumberCounter2의 자식 파일
import { Button } from '@mui/material';
import React from 'react';

// 선언식: 호이스팅이 된다.
// function Btn({name}) {
//   return (
//     <Button variant='contained' 
//      onClick={()=>console.log(name)}>{name}</Button>
//   );
// }

// 한 줄짜리는 return을 받을 필요 없다 하심
// 표현식: 실행될 때 만들어짐
// const Btn = ({name})=>(
//   <Button variant='contained' 
//     onClick={()=>console.log(name)}>{name}</Button>
// )

// const Btn = ({name})=>(
//   <Button variant='contained' 
//   onMouseEnter={()=>console.log(name, "onMouseEnter")} // 마우스 커서 올렸을 때
//   onMouseLeave={()=>console.log(name, "onMouseLeave")} // 마우스 커서 뗐을 때
//   onDoubleClick={()=>console.log(name, "onDoubleClick")} // 마우스 더블클릭 했을 때
//   onContextMenu={()=>console.log(name, "onContextMenu")} // 오른쪽 마우스 클릭했을 때
//   >{name}</Button>
// );

// witch: 이벤트 헨들러에서 이벤트의 유형이나 성격을 나타내는 역할
// 특정 이벤트가 발생했을 때 어떤 이벤트가 발생했는지를 나타내는 문자열 값을 전달 받음

// ()=>(): 단순히 하나의 표현식을 바로 반환할 때
// ()=>{}: 여러 줄 코드할 때 명시적으로 return을 표시할 때
// const handleEvent = (name, which)=>{
//   console.log(name, which)
// }
// const Btn = ({name})=>(
//   <Button variant='contained' 
//   onMouseEnter={()=>handleEvent(name, "onMouseEnter")}
//   onMouseLeave={()=>handleEvent(name, "onMouseLeave")}
//   onDoubleClick={()=>handleEvent(name, "onDoubleClick")}
//   onContextMenu={()=>handleEvent(name, "onContextMenu")}
//   >{name}</Button>
// )

// e: 이벤트객체를 말한다.
const handleEvent = (name, e)=>{
  console.log(name, e)
}
const Btn = ({name})=>(
  <Button variant='contained' 
  onClick={(e)=>handleEvent(name, e)}
  >{name}</Button>
)
export default Btn;