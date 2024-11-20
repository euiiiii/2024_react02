import React, { useState } from "react";
import TempInput from "./TempInput";
import TempRadio from "./TempRadio";
// 부모
function TempEx(props) {
  const [unit, setUnit] = useState("Celsius");
  const [temperature, setTemperature] = useState("");
  const convertedTemp = (unit === "Celsius")
      ? ((temperature * 9) / 5 + 32).toFixed(1)
      : (((temperature - 32) / 5) * 9).toFixed(1);
  return (
    <div>
      <h2>화씨 / 섭씨 변환기</h2>
      <p>
        Coverted: {temperature ? convertedTemp : "--"}
        {unit === "Celsius" ? "℉" : "℃"}
      </p>
      {/* state들의 값을 변경하는 요소들이 모두 자식컴포넌트에게 있음 */}
      <TempInput 
        value={temperature}
        unit={unit} 
        onChange={setTemperature}
      />
      {/* setter 함수를 자식에게 넘긴다. 
          자식 컴포넌트가 부모 컴포넌트를 state를 제어하게 된다.*/}
      <TempRadio unit={unit} 
        onUnitChange={setUnit} 
      />
    </div>
  );
}

export default TempEx;
