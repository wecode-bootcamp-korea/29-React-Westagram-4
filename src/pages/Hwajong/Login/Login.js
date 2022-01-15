import React, { useState } from 'react';
import './Login.scss';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleIdInput = event => {
    setEmail(event.target.value);
  };

  const handlePasswordInput = event => {
    setPassword(event.target.value);
  };

  return (
    <div className="wrap">
      <div className="container">
        <h1>Westagram</h1>
        <div className="input_wrap">
          <input
            className="login-form__input login-id"
            type="text"
            id="id"
            name="id"
            onChange={handleIdInput}
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
        </div>
        <div className="input_wrap">
          <input
            className="login-form__input login-password"
            type="password"
            id="password"
            placeholder="비밀번호"
            onChange={handlePasswordInput}
          />
        </div>
        <div className="login-form__button">
          <button className="login-form__button btn">로그인</button>
        </div>
        <div className="password-forget">
          <a href="#">비밀번호를 잊으셨나요?</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
