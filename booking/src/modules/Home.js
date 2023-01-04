import React from "react";
import Header from "./Header";
import Navbar from "./navbar";
import Featured from "./Featured"
import "./home.css"
import Property from "./propertyList";
import FeaturedProps from "./featuredProperties";
import MailList from "./mailList";
import Footer from "./Footer";

function Home(){
    return(
        <div>
        <Navbar/>
        <Header/>
        <div className="homeContainer">
            <Featured/> 
            <h1 className="homeTitle">Browse By location</h1>
            <Property/>
            <h1 className="homeTile">Featured Properties</h1>
            <FeaturedProps/>
            <MailList/>
            <Footer/>
        </div>
        </div>
    )
}
export default Home;