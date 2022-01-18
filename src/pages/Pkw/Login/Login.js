import React, { useState } from 'react';
import './Login.scss';
import { useNavigate, Link } from 'react-router-dom';

function Login(props) {
  const [userID, setUserID] = useState('');
  const [userPW, setUserPW] = useState('');
  const [validData, setValidData] = useState(false);

  const getID = e => {
    console.log(e);
    setUserID(e.target.value);
  };

  const getPW = e => {
    console.log(e);
    setUserPW(e.target.value);
    if (userID.includes('@') && userPW.length >= 5) {
      setValidData(!validData);
      console.log('done!');
    }
  };

  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/pkw-main');
  };
  const stay = () => {
    navigate('');
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
        <button
          onClick={validData ? goToMain : stay}
          style={{ opacity: validData ? 1 : 0.3 }}
        >
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
