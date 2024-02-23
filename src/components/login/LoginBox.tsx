import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./LoginBox.scss";

const LoginBox = () => {
  const focusRef = useRef<HTMLLabelElement>(null);
  const focusRef_ = useRef<HTMLLabelElement>(null);

  const navigate = useNavigate();
  const {
    register,
    watch,
    resetField,
    setFocus,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const goUrl = () => {
    navigate("/");
  };
  const goJoinPage = () => {
    navigate("/join");
  };
  const onLogin = () => {
    goUrl();
  };

  const onFocusEventHanlder = (e: any) => {
    if (e.target.id === "input-username") {
      focusRef.current?.classList.add("animation");
    } else if (e.target.id === "input-password") {
      focusRef_.current?.classList.add("animation");
    }
  };
  const onBlurEventHanlder = (e: any) => {
    if (e.target.id === "input-username") {
      focusRef.current?.classList.remove("animation");
    } else if (e.target.id === "input-password") {
      focusRef_.current?.classList.remove("animation");
    }
  };
  // input에 value 있을때 label 없애기
  if (watch("userid")) {
    focusRef.current?.classList.add("label-opcacity");
  }
  if (!watch("userid")) {
    focusRef.current?.classList.remove("label-opcacity");
  }
  if (watch("userpassword")) {
    focusRef_.current?.classList.add("label-opcacity");
  }
  if (!watch("userpassword")) {
    focusRef_.current?.classList.remove("label-opcacity");
  }
  return (
    <div className="login-wrapper">
      <h2>로그인</h2>
      <form method="post" action="" className="login-form">
        <div className="input-container">
          <input
            type="text"
            id="input-username"
            {...register("userid", { required: true })}
            onFocus={onFocusEventHanlder}
            onBlur={onBlurEventHanlder}
            className="login-input"
          />
          <label htmlFor="input-username" unselectable="on" ref={focusRef}>
            아이디
          </label>
        </div>
        <div className="input-container">
          <input
            type="password"
            id="input-password"
            {...register("userpassword", { required: true })}
            className="login-input"
            onFocus={onFocusEventHanlder}
            onBlur={onBlurEventHanlder}
          />
          <label htmlFor="input-password" unselectable="on" ref={focusRef_}>
            비밀번호
          </label>
        </div>
        <div className="checkbox">
          <input id="checkbox" type="checkbox" />
          <label htmlFor="checkbox">
            <div className="checkbox-background" />
          </label>
          <span>아이디 저장하기</span>
        </div>
        <input
          type="submit"
          value="로그인"
          className="login"
          onClick={onLogin}
        />
        <input type="submit" value="카카오톡으로 로그인" className="kakao" />
        <input
          type="submit"
          value="회원가입"
          className="join"
          onClick={goJoinPage}
        />
      </form>
    </div>
  );
};

export default LoginBox;
