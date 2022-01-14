import React from 'react';
import './Login.scss';

const LoginHwajong = () => {
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
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
        </div>
        <div className="input_wrap">
          <input
            className="login-form__input login-password"
            type="password"
            id="password"
            placeholder="비밀번호"
          />
        </div>
        <div className="login-form__button">
          <button className="login-form__button btn" onClick={() => {}}>
            로그인
          </button>
        </div>
        <div className="password-forget">
          <a href="#">비밀번호를 잊으셨나요?</a>
        </div>
      </div>
    </div>
  );
};

export default LoginHwajong;
