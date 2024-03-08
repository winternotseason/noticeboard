import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./LoginBox.scss";
import Wrapper from "../UI/Wrapper";
import { useAppDispatch } from "../../hooks";
import { authActions } from "../../store/auth";
import { userActions } from "../../store/user";
import axios from "axios";

type User = {
  email: string;
  password: string;
};

const LoginBox = () => {
  const dispatch = useAppDispatch();
  const idRef = useRef<HTMLLabelElement>(null);
  const passwordRef = useRef<HTMLLabelElement>(null);

  const navigate = useNavigate();

  const { register, watch, handleSubmit, setFocus, resetField } = useForm<User>(
    {}
  );

  // 백엔드 서버 로그인 함수
  const onSubmit = (data: User) => {
    try {
      axios
        .post("https://localhost:8001/auth/login", data, {
          withCredentials: true,
        })
        .then(async (data) => {
          if (data.data.status === 3) {
            alert(`${data.data.message}`);
            resetField("email");
            resetField("password");
            setFocus("email");
            return;
          } else {
            // 엑세스 토큰 저장
            console.log(data.data)
            dispatch(authActions.savedAccessToken(data.data.accessToken));
            // 로그인 상태를 true로
            dispatch(authActions.login());
            // 마이페이지로
            navigate("/");
          }
        });
    } catch (e) {
      console.error(e);
    }
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
  if (watch("email")) {
    idRef.current?.classList.add("label-opcacity");
  } else {
    idRef.current?.classList.remove("label-opcacity");
  }

  if (watch("password")) {
    passwordRef.current?.classList.add("label-opcacity");
  } else {
    passwordRef.current?.classList.remove("label-opcacity");
  }

  return (
    <Wrapper>
      <h2>로그인</h2>
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="input-container">
          <input
            type="text"
            id="input-username"
            {...register("email", { required: true })}
            onFocus={handlerFocusOnInput}
            onBlur={handlerFocusOutInput}
            className="login-input"
          />
          <label htmlFor="input-username" unselectable="on" ref={idRef}>
            이메일
          </label>
        </div>
        <div className="input-container">
          <input
            type="password"
            id="input-password"
            {...register("password", { required: true })}
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
        <input type="submit" value="로그인" className="login" />
        <input type="submit" value="카카오톡으로 로그인" className="kakao" />
        <input
          type="submit"
          value="회원가입"
          className="join"
          onClick={() => {
            navigate("/join");
          }}
        />
      </form>
    </Wrapper>
  );
};

export default LoginBox;
