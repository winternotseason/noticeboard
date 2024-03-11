import defaultProfileImg from "../../assets/defaultprofile.jpeg";
import "./MypageContainer.scss";
import { FaPenToSquare } from "react-icons/fa6";
import axios from "axios";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../hooks";
import { userActions } from "../../store/user";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

type UserInfo = {
  email : string,
  nickname : string,
  password : string,
  createdAt : string
}
const MypageContainer = () => {
  const [userInfo, setUserInfo] = useState<UserInfo>();
  const profile = useSelector((state: RootState) => state.user.profile);
  const navigate = useNavigate();

  useEffect(() => {
    const test = async () => {
      await axios
        .get("https://localhost:8001/user")
        .then((res) => setUserInfo(res.data.user));
    };
    test();
  }, []);

  console.log(userInfo)
  const handlerLogout = async () => {
    await axios.get("https://localhost:8001/auth/logout").then(() => {
      console.log("로그아웃 성공");
      navigate("/login");
    });
  };
  return (
    <div className="mypage-container">
      <div className="my-info">
        <div className="my-info-img">
          {profile ? (
            <img src={`https://localhost:8001${profile}`} alt="profile-img" />
          ) : (
            <img src={defaultProfileImg} alt="profile-img" />
          )}
          <label htmlFor="profile-img">
            <FaPenToSquare className="change-my-img" />
          </label>
          <input type="file" id="profile-img" name="profile-img" />
        </div>

        <div className="my-info-content">
          <p>닉네임 : {userInfo?.nickname}</p>
          <p>이메일 : {userInfo?.email}</p>
          <p>가입날짜 : {userInfo?.createdAt.slice(0, 10)}</p>
        </div>
      </div>
      <div className="my-content">
        <button onClick={handlerLogout}>logout</button>
      </div>
    </div>
  );
};

export default MypageContainer;
