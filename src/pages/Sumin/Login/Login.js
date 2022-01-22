import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [isLoginBtn, setisLoginBtn] = useState(false);

  const handleIdInput = event => {
    setId(event.target.value);
  };

  const handlePwInput = event => {
    setPw(event.target.value);
  };

  const loginBtnValidation = () => {
    return id.includes('@') && pw.length > 4
      ? setisLoginBtn(true)
      : setisLoginBtn(false);
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
            onKeyUp={loginBtnValidation}
          />
          <input
            className="pw input-style"
            type="password"
            placeholder="비밀번호"
            onChange={handlePwInput}
            onKeyUp={loginBtnValidation}
          />
          <button
            type="button"
            className={isLoginBtn ? 'BtnOn' : 'BtnOff'}
            disabled={!isLoginBtn}
            onClick={goToMain}
          >
            로그인
          </button>
        </form>
        <div className="forgot-password">비밀번호를 잊으셨나요?</div>
      </div>
    </section>
  );
};

export default Login;
