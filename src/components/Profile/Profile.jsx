import webDefault from "../../assets/webDefault.png";
import "./Profile.css";
const Profile = () => {
  return (
    <div className="profile_cont">
      <div className="profile_wrap">
        <img
          src="https://avatars.githubusercontent.com/u/97938411?v=4"
          // src={webDefault}
          alt=""
          id="profile__img"
        />
        <h2 id="twitter">OgbonnayaJohns3</h2>
        {/* <h3 id="slack">OgbonnayaJohns3</h3> */}
      </div>
    </div>
  );
};

export default Profile;
