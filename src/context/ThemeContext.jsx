import { createContext } from "react";

/*
                    export                    export default
내보내는 항목의 수  여러 개                    한 개
이름 지정 여부      반드시 이름 지정           이름 자유롭게 지정 가능
가져올 때 사용방법  {}으로 감싸서 이름 매칭    이름 매칭 없이 자유롭게 가져오기 가능
*/
export const ThemeContext = createContext(null);