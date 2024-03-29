import "./JoinBox.scss";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import { regExpEm, regExgPw, regExpNm } from "../../constants/reg";
import Wrapper from "../UI/Wrapper";
import { useEffect } from "react";

type FormValues = {
  email: string;
  nickname: string;
  password: string;
  passwordCheck: string;
};
const JoinBox = () => {
  const navigate = useNavigate();
  const {
    register,
    watch,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<FormValues>();

  useEffect(() => {
    if (
      watch("password") !== watch("passwordCheck") &&
      watch("passwordCheck")
    ) {
      setError("passwordCheck", {
        type: "password-mismatch",
        message: "비밀번호가 일치하지 않습니다",
      });
    } else {
      // 비밀번호 일치시 오류 제거
      clearErrors("passwordCheck");
    }
  }, [watch("password"), watch("passwordCheck")]);
  const onSubmit = (data: FormValues) => {
    axios
      .post("https://localhost:8001/auth/join", data)
      .then((res: AxiosResponse) => {
        if (res.data.status === 200) {
          alert("회원가입 성공");
          navigate("/login");
        }
      })
      .catch((e) => console.error(e));
  };

  return (
    <Wrapper>
      <h2>회원가입</h2>
      <form
        className="join-form flex-column"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <label htmlFor="id" unselectable="on">
          아이디
        </label>
        <input
          type="text"
          className="join-input"
          {...register("email", {
            required: { value: true, message: "아이디를 입력하세요." },
            pattern: {
              value: regExpEm,
              message: "이메일 형식이 잘못되었습니다.",
            },
          })}
        />
        {errors.email?.message && (
          <p className="error-message">{errors.email?.message}</p>
        )}
        <label htmlFor="nickname" unselectable="on">
          닉네임
        </label>
        <input
          type="text"
          id="nickname"
          className="join-input"
          {...register("nickname", {
            required: { value: true, message: "닉네임을 입력하세요." },
            pattern: {
              value: regExpNm,
              message:
                "닉네임을 다시 입력해주세요. (영문자, 한글 또는 숫자 2~16자)",
            },
          })}
        />
        {errors.nickname?.message && (
          <p className="error-message">{errors.nickname?.message}</p>
        )}
        <label htmlFor="input-password" unselectable="on">
          비밀번호
        </label>
        <input
          type="password"
          id="input-password"
          className="join-input"
          {...register("password", {
            required: { value: true, message: "비밀번호를 입력하세요." },
            pattern: {
              value: regExgPw,
              message: "비밀번호를 다시 입력해주세요. (영문, 숫자 조합 8~16자)",
            },
          })}
        />
        {errors.password?.message && (
          <p className="error-message">{errors.password?.message}</p>
        )}
        <label htmlFor="input-password" unselectable="on">
          비밀번호 확인
        </label>
        <input
          type="password"
          id="input-password"
          className="join-input"
          {...register("passwordCheck", {
            required: true,
          })}
        />
        {errors.passwordCheck?.message && (
          <p className="error-message">{errors.passwordCheck?.message}</p>
        )}
        <button className="btn">가입하기</button>
      </form>
    </Wrapper>
  );
};

export default JoinBox;
