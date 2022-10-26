import "./App.css";
import Profile from "../Profile/Profile";
import LinkSection from "../LinkSection/LinkSection";
import SocialSection from "../SocialSection/SocialSection";
import Footer from "../Footer/Footer";
function App() {
  return (
    <div className="App">
      <Profile />
      <LinkSection />
      <SocialSection />
      <Footer />
    </div>
  );
}

export default App;
