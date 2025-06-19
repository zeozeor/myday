import { useState } from "react";

const Darkmode = () => {
  const [dark,setDark] = useState(false);
  const handleClick = ()=>{
    setDark(!dark);
  }
  if( dark ){
    document.body.style.backgroundColor = "#222";
    document.body.style.color = "#fff";
  } else {
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#222";
  }
  return (
    <button onClick={handleClick}>
      {dark? "라이트모드":"다크모드"}
    </button>
  );
};

export default Darkmode;