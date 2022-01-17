import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

import '../../../styles/reset.scss';
import '../../../styles/common.scss';

function Login() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [loginBtn, setLoginBtn] = useState(false);

  function handleIdInput(e) {
    setId(e.target.value);
  }

  function handlePwInput(e) {
    setPw(e.target.value);
  }

  const loginBtnChange = () => {
    return id.includes('@') && pw.length > 4
      ? setLoginBtn(true)
      : setLoginBtn(false);
  };

  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/jieun-main');
  };

  return (
    <div className="loginJieun">
      <main>
        <img
          className="loginImg"
          alt="인스타그램"
          src="/images/Jieun/login.png"
        />
        <section>
          <div className="loginBox">
            <div className="logo">westagram</div>
            <input
              className="id"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onChange={e => handleIdInput(e)}
              onKeyUp={loginBtnChange}
            />
            <input
              className="pw"
              type="password"
              placeholder="비밀번호"
              onChange={e => handlePwInput(e)}
              onKeyUp={loginBtnChange}
            />
            <div className="login">
              <button
                class={loginBtn ? 'loginOn' : 'loginOff'}
                onClick={goToMain}
              >
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
              src="/images/Jieun/appstore.png"
            />
            <img
              className="googlePlay"
              alt="google play"
              src="/images/Jieun/googleplay.png"
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Login;
