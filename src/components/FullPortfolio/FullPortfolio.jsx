import React from "react";
import styles from "./FullPortfolio.module.css";
import Header from "./Pages/Header/Header";
import Main from "./Pages/Main/Main";
import Projects from "./Pages/Projects/Projects";
import Slogan from "./Pages/Slogan/Slogan";
import Footer from "./Pages/Footer/Footer";
import Specializations from "./Pages/Specializations/Specializations";

function FullPortfolio(props) {
    let user = props.state.portfolios[props.match.params.id];

    return (
        <div className={styles.portfolio}>
            <Header/>
            <Main user={user}/>
            <Specializations user={user} specializationsInfo={props.state.specializations}/>
            <Projects user={user} projects={props.state.projects}/>
            <Slogan user={user}/>
            <Footer user={user} socials={props.state.socials}/>
        </div>
    );
}

export default FullPortfolio;
