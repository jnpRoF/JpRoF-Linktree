import slackIcon from "../../assets/slack.png";
import gitIcon from "../../assets/gitHub.png";
import "./SocialSection.css";

const SocialSection = () => {
  return (
    <div className="social_section_container">
      <div className="social_section_wrapper">
        <img src={slackIcon} alt="" />
        <img src={gitIcon} alt="" />
      </div>
    </div>
  );
};

export default SocialSection;
