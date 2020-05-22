import React from "react";
import styles from "./Contacts.module.css";
import H2 from "../../H2/H2";
import ButtonWindow from "../../Buttons/ButtonProject/ButtonWindow";

class Contacts extends React.Component {

    state = {
        name: "",
        email: "",
        message: "",
    };

    changeTitle = (e) => {
        if (e.currentTarget.placeholder === "Name") {
            this.setState({name: e.currentTarget.value});
        } else if (e.currentTarget.placeholder === "E-mail") {
            this.setState({email: e.currentTarget.value});
        } else {
            this.setState({message: e.currentTarget.value});
        }
    };

    cleanForm = () => {
        this.setState(
            {
                name: "",
                email: "",
                message: "",
            });
    };

    render = () => {

        return (
            <div className={styles.contacts}>
                <div className={styles.myContacts}>
                    <H2 name="Fill Your contacts:"/>
                    <form className={styles.formWrapper}>
                        <input className={styles.formArea} placeholder="Name" type="text" value={this.state.name}
                               onChange={this.changeTitle}/>
                        <input className={styles.formArea} placeholder="E-mail" type="email" value={this.state.email}
                               onChange={this.changeTitle}/>
                        <textarea className={styles.messageArea} placeholder="Message" value={this.state.message}
                                  onChange={this.changeTitle}>
              </textarea>
                    </form>
                    <ButtonWindow name="Submit" state={this.state} cleanForm={this.cleanForm}/>
                </div>
            </div>
        );
    };
}

export default Contacts;
