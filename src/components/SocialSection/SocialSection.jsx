import slackIcon from "../../assets/vector.png"
import gitIcon from "../../assets/Icon(1).png"

const SocialSection = () => {
    return (
      <div className="social_section_container">
        <div className="social_section_wrapper">
          <img src={slackIcon} />
          <img src={gitIcon} />
        </div>
      </div>
    );
}

export default SocialSection