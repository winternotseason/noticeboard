import "./JoinBox.scss";
import { useForm } from "react-hook-form";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { regExpEm, regExgPw, regExpNm } from "../../constants/reg";
import Wrapper from "../UI/Wrapper";
import { User } from "../../constants/interface";

const JoinBox = () => {
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

  // form 제출 함수
  const handleJoinUser = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (errors?.id?.type === "pattern" || "required") {
      alert("아이디를 다시 입력해주세요. (영문자 또는 숫자 6~20자)");
      resetField("id");
      setFocus("id");
    } else if (errors?.nickname?.type === "pattern" || "required") {
      alert("닉네임을 다시 입력해주세요. (영문자, 한글 또는 숫자 2~16자)");
      resetField("nickname");
      setFocus("nickname");
    } else if (errors?.password?.type === "pattern") {
      alert("비밀번호를 다시 입력해주세요. (영문, 숫자 조합 8~16자)");
      resetField("password");
      resetField("passwordValid");
      setFocus("password");
      // 비밀번호가 다른 경우
    } else if (watch("password") !== watch("passwordValid")) {
      alert("비밀번호가 다릅니다.");
      resetField("passwordValid");
      setFocus("passwordValid");
    } else {
      const user: User = {
        id: watch("id"),
        nickname: watch("nickname"),
        password: watch("password"),
      };
      axios.post("http://localhost:8001/join", JSON.stringify(user), {
        headers: { "Content-Type": "application/json" },
      });
      // 회원가입에 성공했을 경우
      navigate("/login");
    }
  };

  return (
    <Wrapper>
      <h2>회원가입</h2>
      <form className="join-form flex-column">
        <label htmlFor="id" unselectable="on">
          아이디
        </label>
        <input
          type="text"
          id="id"
          className="join-input"
          value={watch("id")}
          {...register("id", { required: true, pattern: regExpEm })}
        />
        <label htmlFor="nickname" unselectable="on">
          닉네임
        </label>
        <input
          type="text"
          id="nickname"
          className="join-input"
          {...register("nickname", { required: true, pattern: regExpNm })}
        />
        <label htmlFor="input-password" unselectable="on">
          비밀번호
        </label>
        <input
          type="password"
          id="input-password"
          className="join-input"
          {...register("password", { required: true, pattern: regExgPw })}
        />
        <label htmlFor="input-password" unselectable="on">
          비밀번호 확인
        </label>
        <input
          type="password"
          id="input-password"
          className="join-input"
          {...register("passwordValid", { required: true })}
        />

        <button className="btn" onClick={handleJoinUser}>
          가입하기
        </button>
      </form>
    </Wrapper>
  );
};

export default JoinBox;
