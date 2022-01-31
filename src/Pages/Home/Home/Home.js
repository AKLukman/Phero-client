import React from "react";
import Profiles from "../../Dashboard/Seller/Profiles/Profiles";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import Advantage from "../Advantages/Advantage";
import Banner from "../Banner/Banner";
import Developers from "../Developers/Developers";
import FourthSection from "../FourthSection/FourthSection";
import Reviews from "../Reviews/Reviews";
import SecondSection from "../SecondSecttion/SecondSection";
import ThirdSection from "../ThirdSection/ThirdSection";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Banner></Banner>
      <Developers></Developers>
      <SecondSection></SecondSection>
      <ThirdSection></ThirdSection>
      <Advantage></Advantage>
      <FourthSection></FourthSection>
      {/* <Products></Products> */}
      {/* <Reviews></Reviews> */}
      <Footer></Footer>
    </div>
  );
};

export default Home;
