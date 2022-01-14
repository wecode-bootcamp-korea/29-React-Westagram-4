import React from 'react';
import login from './login.scss'
import {useNavigate, Link} from 'react-router-dom'


function Login(props) {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate("/main");
  }

  return (
    <div className="login-box">
        <p className="logo">westagram</p>
        <div className="login-data">
            <input
                type="text"
                placeholder="전화번호, 사용자 이름 또는 이메일"
                // value={props.id}
                />
            <input
                type="password"
                placeholder="비밀번호"
                // value={props.pw}
                />
            <button onClick={goToMain}>로그인</button>
        </div>
        <Link to="" className="info">비밀번호를 잊으셨나요?</Link>
    </div>
  );
}

export default Login;
