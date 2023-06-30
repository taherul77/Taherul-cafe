import MenuBanner from "../../component/MenuBanner";
import MenuItem from "../../component/MenuItem";
import Wrapper from "../../component/Wrapper";
import img from "../../assets/2.svg";
import Feature from "./Feature";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      hijjj
      <Feature></Feature>+
      <MenuBanner
        img={img}
        heading={"Favorite"}
        description={"DRINKS"}
      ></MenuBanner>
      
      <Wrapper>
        <div className="grid grid-cols-12 gap-5">
          <MenuItem></MenuItem>
        </div>
      </Wrapper>
      <Contact></Contact>
    </div>
  );
};

export default Home;
