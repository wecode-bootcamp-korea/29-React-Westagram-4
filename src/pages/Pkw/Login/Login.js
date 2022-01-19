import React, { useState } from 'react';
import './Login.scss';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const [userID, setUserID] = useState('');
  const [userPW, setUserPW] = useState('');
  const [validData, setValidData] = useState(false);

  const getID = e => {
    setUserID(e.target.value);
  };

  const getPW = e => {
    setUserPW(e.target.value);
  };

  const validateData = () => {
    if (userID.includes('@') && userPW.length > 4) {
      setValidData(true);
    } else {
      setValidData(false);
    }
  };

  const navigate = useNavigate();
  const goToMain = () => {
    validData ? navigate('/pkw-main') : alert('잘못된 정보입니다.');
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
          onKeyUp={validateData}
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={userPW}
          onChange={getPW}
          onKeyUp={validateData}
        />
        <button onClick={goToMain} style={{ opacity: validData ? 1 : 0.3 }}>
          로그인
        </button>
      </div>
      <Link to="" className="info">
        비밀번호를 잊으셨나요?
      </Link>
    </div>
  );
}

export default Login;
