import { Button } from '@mui/material';
import React, {useState} from 'react';

function CheckEx(props) {
  const[isPinned, setPinned] = useState(false)
  const togglePinned = () => {
    setPinned(!isPinned)
  }
  return (
    <div>
      <Button variant="outlined" 
          onClick={togglePinned}
          // isPinned가 참이면 v 체크하고 아니면 무시
      > Pinn This ! {isPinned && 'v'} </Button>
    </div>
  );
}

export default CheckEx;