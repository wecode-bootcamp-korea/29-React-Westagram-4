import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

import '../../Styles/Reset.scss';
import '../../Styles/Commom.scss';

function Login() {
  let [id, setId] = useState('');
  let [pw, setPw] = useState('');

  function handleIdInput(e) {
    setId(e.target.value);
  }

  function handlePwInput(e) {
    setPw(e.target.value);
  }

  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/Main');
  };

  return (
    <div className="loginJieun">
      <main>
        <img className="loginImg" alt="인스타그램" src="/images/login.png" />
        <section>
          <div className="loginBox">
            <div className="logo">westagram</div>
            <input
              className="id"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onChange={e => handleIdInput(e)}
            />
            <input
              className="pw"
              type="password"
              placeholder="비밀번호"
              onChange={e => handlePwInput(e)}
            />
            <div className="login">
              <button class="loginBtn" onClick={goToMain}>
                로그인
              </button>
            </div>
            <div className="findPassword">
              <a href="/">비밀번호를 잊으셨나요?</a>
            </div>
          </div>
          <div className="joinBox">
            계정이 없으신가요?&nbsp;
            <a class="join" href="/">
              가입하기
            </a>
          </div>
          <div className="dowload">앱을 다운로드하세요.</div>
          <div className="app">
            <img
              className="appStore"
              alt="app store"
              src="/images/appstore.png"
            />
            <img
              className="googlePlay"
              alt="google play"
              src="/images/googleplay.png"
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Login;
