import React from 'react';
import Navbar from "../components/sections/Navbar";
import Hero from "../components/sections/Hero";
import Evolution from "../components/sections/Evolution/Evolution";
import WhyUs from "../components/sections/Whyus/WhyUs";
import Programs from "../components/sections/Program/Programs";
import Notice from "../components/sections/Notice";
import Event from "../components/sections/Events/Events";
import Journey from "../components/sections/Journey";
import AchivementCount from "../components/sections/achivement/AchivementCount";
import Achievement from "../components/sections/achivement/Achievement";
import Gallery from "../components/sections/Gallery";
import News from "../components/sections/news/News";
import Video from "../components/sections/Video";
import Faq from "../components/sections/Faq";
import Footer from "../components/sections/Footer";

const Home = () => {
    return (
        <section className="min-h-screen bg-white">
            <Navbar />
            <Hero />
            <Evolution />
            <WhyUs />
            <Programs />
            <Notice />
            <Event />
            <Journey />
            <AchivementCount />
            <Achievement />
            <Gallery />
            <News />
            <Video />
            <Faq />
            <Footer />
        </section>
    );
};

export default Home;
