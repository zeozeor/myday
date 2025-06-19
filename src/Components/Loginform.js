import { useState } from "react";

const Loginform = ({onLogin}) => {
  const [user,setUser] = useState('');
  const handleSubmit = (e)=>{
    e.preventDefault();
    const trimmed = user.trim();
    if( trimmed ) { //빈값이 아니라면
      onLogin(user); //부모에게 데이터 전송
      setUser('');
    }
  }
  
  return (
    <form className="login-box" onSubmit={handleSubmit}>
      {/* <h2>Login</h2> */}
      <input className="inputbox" type="text"
        value={user}
        onChange={(e)=>{setUser(e.target.value)}}
        placeholder="이름을 입력해주세요"
      />
      <button className="login-btn" type="submit">Login</button>
    </form>
  );
};

export default Loginform;