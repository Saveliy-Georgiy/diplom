import React from "react";
import styles from "./ButtonStyles.module.css";
import s from "./ButtonWindow.module.css";
import Contacts from "../../Pages/Contacts/Contacts";

class ButtonShowContacts extends React.Component {

    render = () => {

        return (
            <div>
                <button className={styles.btnSubmit} onClick={this.activateModalWindow}>{this.props.name}</button>
            </div>
        );
    };
}

export default ButtonShowContacts;
