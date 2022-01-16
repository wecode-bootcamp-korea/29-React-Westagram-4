import React, { useState } from 'react';
import './login.scss';
import { useNavigate, Link } from 'react-router-dom';

function Login(props) {
  const [userID, setUserID] = useState('');
  const [userPW, setUserPW] = useState('');

  const getID = e => {
    console.log(e);
    setUserID(e.target.value);
  };

  const getPW = e => {
    console.log(e);
    setUserPW(e.target.value);
  };

  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/pkw-main');
  };

  return (
    <div className="login-box">
      <p className="logo">westagram</p>
      <div className="login-data">
        <input
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          value={userID}
          onChange={getID}
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={userPW}
          onChange={getPW}
        />
        <button onClick={goToMain}>로그인</button>
      </div>
      <Link to="" className="info">
        비밀번호를 잊으셨나요?
      </Link>
    </div>
  );
}

export default Login;
