import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Advantage from '../Advantages/Advantage';
import Banner from '../Banner/Banner';
import FourthSection from '../FourthSection/FourthSection';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import SecondSection from '../SecondSecttion/SecondSection';
import ThirdSection from '../ThirdSection/ThirdSection';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <SecondSection></SecondSection>
            <ThirdSection></ThirdSection>
            <Advantage></Advantage>
            <FourthSection></FourthSection>
            {/* <Reviews></Reviews> */}
            <Footer></Footer>
        </div>
    );
};

export default Home;