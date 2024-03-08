import defaultProfileImg from "../../assets/defaultprofile.jpeg";
import "./MypageContainer.scss";
import { FaPenToSquare } from "react-icons/fa6";
import axios from "axios";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useAppDispatch } from "../../hooks";
import { userActions } from "../../store/user";

const MypageContainer = () => {
  const dispatch = useAppDispatch();
  const profile = useSelector((state: RootState) => state.user.profile);
  const user = useSelector((state: RootState) => state.user);


  const uploadProfile = async (e: any) => {
    if (e.target.files) {
      const uploadProfileImg = e.target.files[0];
      const formData = new FormData();
      formData.append("profile-img", uploadProfileImg);
      await axios
        .post("https://localhost:8001/profile/img", formData, {
          withCredentials:true
        })
        .then((res) => {
          dispatch(userActions.changeProfile(res.data.url));
        })
        .catch((e) => console.error(e));
    }
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
          <input
            type="file"
            id="profile-img"
            name="profile-img"
            onChange={uploadProfile}
          />
        </div>

        <div className="my-info-content">
          <p>닉네임 : {user.nickname}</p>
          <p>이메일 : {user.email}</p>
          <p>가입날짜 : {user.createdAt.slice(0,10)}</p>
        </div>
      </div>
      <div className="my-content"></div>
    </div>
  );
};

export default MypageContainer;
