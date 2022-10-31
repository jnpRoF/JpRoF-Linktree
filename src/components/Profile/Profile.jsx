import webDefault from "../../assets/webDefault.png";
import { useState } from "react";
import camera from "../../assets/camera-01.png";
import Icon from "../../assets/Icon.png";
import "./Profile.css";
const Profile = () => {
  const [isHover, setisHover] = useState(false);
  return (
    <div className="profile_cont">
      <div className="profile_wrap">
        <div className="img_wrap">
          <img
            src="https://avatars.githubusercontent.com/u/97938411?v=4"
            // src={webDefault}
            alt=""
            id="profile__img"
            onMouseOver={() => {
              setisHover(true);
            }}
            onMouseOut={() => {
              setisHover(false);
            }}
          />
          <img
            src={camera}
            alt=""
            className="cam"
            style={{ display: isHover ? "block" : "none" }}
          />
        </div>
        <h2 id="twitter">OgbonnayaJohns3</h2>
        {/* <h3 id="slack">OgbonnayaJohns3</h3> */}
      </div>
      <img src={Icon} className="share_icon" alt="" />
    </div>
  );
};

export default Profile;
