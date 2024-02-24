import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./LoginBox.scss";
import Wrapper from "../UI/Wrapper";

const LoginBox = () => {
  const idRef = useRef<HTMLLabelElement>(null);
  const passwordRef = useRef<HTMLLabelElement>(null);

  const navigate = useNavigate();
  
  const { register, watch } = useForm({
    mode: "onChange",
  });

  const goJoinPage = () => {
    navigate("/join");
  };

  const handlerSuccessLogin = () => {
    navigate("/");
  };
  // input focus animation
  const handlerFocusOnInput = (e: any) => {
    if (e.target.id === "input-username") {
      idRef.current?.classList.add("animation");
    } else if (e.target.id === "input-password") {
      passwordRef.current?.classList.add("animation");
    }
  };
  const handlerFocusOutInput = (e: any) => {
    if (e.target.id === "input-username") {
      idRef.current?.classList.remove("animation");
    } else if (e.target.id === "input-password") {
      passwordRef.current?.classList.remove("animation");
    }
  };

  // input에 value 있을때 label 안보이게
  if (watch("userid")) {
    idRef.current?.classList.add("label-opcacity");
  } else {
    idRef.current?.classList.remove("label-opcacity");
  }

  if (watch("userpassword")) {
    passwordRef.current?.classList.add("label-opcacity");
  } else {
    passwordRef.current?.classList.remove("label-opcacity");
  }

  return (
    <Wrapper>
      <h2>로그인</h2>
      <form className="login-form">
        <div className="input-container">
          <input
            type="text"
            id="input-username"
            {...register("userid", { required: true })}
            onFocus={handlerFocusOnInput}
            onBlur={handlerFocusOutInput}
            className="login-input"
          />
          <label htmlFor="input-username" unselectable="on" ref={idRef}>
            아이디
          </label>
        </div>
        <div className="input-container">
          <input
            type="password"
            id="input-password"
            {...register("userpassword", { required: true })}
            className="login-input"
            onFocus={handlerFocusOnInput}
            onBlur={handlerFocusOutInput}
          />
          <label htmlFor="input-password" unselectable="on" ref={passwordRef}>
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
          onClick={handlerSuccessLogin}
        />
        <input type="submit" value="카카오톡으로 로그인" className="kakao" />
        <input
          type="submit"
          value="회원가입"
          className="join"
          onClick={goJoinPage}
        />
      </form>
    </Wrapper>
  );
};

export default LoginBox;
