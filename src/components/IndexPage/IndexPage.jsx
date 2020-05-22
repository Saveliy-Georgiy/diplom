import React from "react";
import styles from "./IndexPage.module.css";
import Greeting from "./Greeting/Greeting";
import Catalog from "./Catalog/Catalog";


function IndexPage(props) {
    return (
        <div className={styles.mainBlock}>
            <Greeting/>
            <Catalog state={props.state}
                     changeStatus={props.changeStatus}
                     isChoose={props.isChoose}
                     changeStatusSkill={props.changeStatusSkill}
            />
        </div>
    );
}

export default IndexPage;
