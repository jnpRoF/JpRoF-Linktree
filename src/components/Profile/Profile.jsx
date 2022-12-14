import camera from "../../assets/camera-01.png";
import Icon from "../../assets/Icon.png";
import More from "../../assets/more.png";
import "./Profile.css";
const Profile = () => {
  return (
    <div className="profile_cont">
      <div className="profile_wrap">
        <div className="img_wrap">
          <img
            src="https://avatars.githubusercontent.com/u/97938411?v=4"
            alt=""
            id="profile__img"
          />
          <img src={camera} alt="" className="cam" />
        </div>
        <h2 id="twitter">OgbonnayaJohns3</h2>
        {/* <h3 id="slack">JpRoF</h3> */}
      </div>
      <img src={Icon} className="share_icon" alt="" />
      <img src={More} className="more_icon" alt="" />
    </div>
  );
};

export default Profile;
