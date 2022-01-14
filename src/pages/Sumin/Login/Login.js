import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";



function Login() {
    const navigate = useNavigate();
    const goToMain = () => {
        navigate("/main")
    };

    return(
        <section>
        <div className="box">
            <div className="logo">westagram</div>
                <form className="login-form">
                    <input className="id input-style" type="text" placeholder="전화번호, 사용자 이름 또는 이메일"/>
                    <input className="pw input-style" type="password" placeholder="비밀번호"/>
                    <button onClick={goToMain}>로그인</button>
                </form>
            <div className="forgot-password">비밀번호를 잊으셨나요?</div>
        </div>
        </section>
    )
}

export default LoginSumin;