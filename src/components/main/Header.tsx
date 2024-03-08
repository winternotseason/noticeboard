import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AccessTokenRequest } from "../../hooks/useToken";
import defaultProfileImg from "../../assets/defaultprofile.jpeg";

import "./Header.scss";
import { useAppDispatch } from "../../hooks";
import { userActions, UserInfo } from "../../store/user";
import { RootState } from "../../store";

const Header = () => {
  const [userNick, setUserNick] = useState("");
  const dispatch = useAppDispatch();
  const token = useSelector((state: any) => state.auth.accessToken);
  const user = useSelector((state: any) => state.user);
  const profileImg = useSelector((state: RootState) => state.user.profile);
  useEffect(() => {
    // 백엔드에서부터 유저 정보 받아오기
    AccessTokenRequest(token)
      .then((res) => {
        const user: UserInfo = {
          email: res.data.data.userInfo.email,
          id: res.data.data.userInfo.id,
          nickname: res.data.data.userInfo.nickname,
          createdAt: res.data.data.userInfo.createdAt,
        };
        dispatch(userActions.savedUserInfo(user));
        setUserNick(user.nickname);
        console.log(user);
      })
      .catch((e) => console.error(e));
  }, [token, user]);

  return (
    <header className="header">
      <nav>
        <div className="profile">
          {profileImg ? (
            <img src={`https://localhost:8001${profileImg}`} alt="profile-img" />
          ) : (
            <img src={defaultProfileImg} alt="profile-img" />
          )}
          <h4>{userNick}</h4>
          <p>님 환영합니다!</p>
        </div>
      </nav>
    </header>
  );
};

export default Header;
