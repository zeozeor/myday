import { useEffect, useState } from "react";

const ThemeMode = () => {
  const THEME_KEY = "theme";  // 로컬에 저장하기 위해 키 부여
  const [theme,setTheme] = useState(false);

  // 로컬에 저장
  useEffect(()=>{
    const saved = JSON.stringify(theme);
    localStorage.setItem(THEME_KEY,saved);
  },[theme]);

  const handleClick = ()=>{
    setTheme(!theme);
  }
  if( theme ){
    document.body.style.backgroundColor = "#1e90ff";
    document.body.style.color = "#fff";
  } else {
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#1e90ff";
  }
  
  return (
    <button className="mode" onClick={handleClick}>
      {theme? "라이트모드":"블루모드"}
    </button>
  );
};

export default ThemeMode;