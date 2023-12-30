import React   from "react";
import Layout from "./shared/layout.jsx";
import Hero from "./hero/hero.jsx";
import MainSection from "./main-section/main-section.jsx";
import FeaturedCollection from "./featured-collection/featured-collection.jsx";


const HomePage = () => {
    return (
        <>
        <Layout>
            <Hero />
            <MainSection />
            <FeaturedCollection />
        </Layout>
        </>
    )
}

export default HomePage;