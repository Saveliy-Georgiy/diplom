import React from "react";
import styles from "./Slogan.module.css";
import H2 from "../../H2/H2";
import Contacts from "../Contacts/Contacts";
import s from "../../Buttons/ButtonProject/ButtonWindow.module.css";

class Slogan extends React.Component{

    state = {
        displayContacts: false
    }

    activateContacts = () => {
        this.setState({displayContacts: true});
        setTimeout(() => window.scrollTo(0,document.body.scrollHeight), 500)
    };

    render = () => {

        const display = this.state.displayContacts === true ? s.displayBlock : s.displayNone;

        return (
            <div>
                <div className={styles.slogan} id="hire">
                    <div className={styles.mySlogan}>
                        <H2 name="Want to hire this employee?"/>
                        <button onClick={this.activateContacts} className={styles.btnSubmit}>Hire!</button>
                    </div>
                </div>
                <div className={display}>
                    <Contacts/>
                </div>
            </div>
        );
    }
}

export default Slogan;
