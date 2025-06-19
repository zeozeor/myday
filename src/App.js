import { useEffect, useState } from "react";
import "./App.scss";
import Loginform from "./Components/Loginform";
import Time from "./Components/Time";
import MainPage from "./Components/MainPage";

import bgimg from './images/p8.jpg';
import Weather from "./Components/Weather";
import ThemeMode from "./Components/ThemeMode";

const App = () => {
  const USER_KEY = "user_name";
  const [user,setUser] = useState('');

  //처음에 시작하자마자 user_name을 읽기
  useEffect(()=>{
    const saved = localStorage.getItem(USER_KEY);
    if( saved ){
      setUser(saved);
    }
  },[]);

  // 자식값을 부모에게. 함수 선언 후
  const handleLogin = (data)=>{
    localStorage.setItem(USER_KEY,data); //로컬에 저장할 경우
    setUser(data);
  }
  const handleLogout = ()=>{
    localStorage.removeItem(USER_KEY);
    setUser('');
  }
  return (
    <div className="app">
      {/* <img src="./images/p6.jpg" alt="이미지1"/> */}
      {/* <img src={`${process.env.PUBLIC_URL}/images/p6.jpg`} alt="이미지1"/> */}
      {/* <img src={bgimg} alt="이미지2" /> */}
      <ThemeMode />
      <Weather />
      <Time />
      {
        user ? (
        <MainPage user={user} onLogout={handleLogout} />
        ) : (
        <Loginform onLogin={handleLogin} />
        )
      }
      
    </div>
  );
  
};

export default App;