import I4G from "../../assets/I4G.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <h3 className="ft_text">
        Zuri <b style={{ color: "red", fontSize: "50px" }}>.</b> Internship
      </h3>
      <p className="ft-text2">HNG Internship 9 Frontend Task</p>
      <img src={I4G} alt="" />
    </footer>
  );
};

export default Footer;
