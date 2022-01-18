import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const [id, setId] = useState(''); //eslint-disable-ine no-unused-vars
  const [pw, setPw] = useState(''); //eslint-disable-ine no-unused-vars

  const handleIdInput = event => {
    setId(event.target.value);
    console.log(event.target.value);
  };

  const handlePwInput = event => {
    setPw(event.target.value);
    console.log(event.target.value);
  };

  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/Sumin-main');
  };

  return (
    <section>
      <div className="box">
        <div className="logo">westagram</div>
        <form className="login-form">
          <input
            className="id input-style"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={handleIdInput}
          />
          <input
            className="pw input-style"
            type="password"
            placeholder="비밀번호"
            onChange={handlePwInput}
          />
          <button onClick={goToMain}>로그인</button>
        </form>
        <div className="forgot-password">비밀번호를 잊으셨나요?</div>
      </div>
    </section>
  );
};

export default Login;
