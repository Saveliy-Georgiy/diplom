import React from "react";
import styles from "./ButtonStyles.module.css";
import s from "./ButtonWindow.module.css";

class ButtonWindow extends React.Component {

    state = {
        modalWindow: false,
    };

    activateModalWindow = () => {
        if(this.props.state.name === "" || this.props.state.email === "" ||this.props.state.message === "") {
            alert("Fill all fields in the form");
        } else {
        this.setState({modalWindow: true});
        }
    };

    onClickClose = () => {
        this.deactivateModalWindow();
        this.props.cleanForm();
    }

    deactivateModalWindow = () => {
        this.setState({modalWindow: false});
    };

    render = () => {

        const display = this.state.modalWindow === true ? s.displayBlock : s.displayNone;

        return (
            <div>
                <button className={styles.btnSubmit} onClick={this.activateModalWindow}>{this.props.name}</button>
                <div className={s.modalBackground + ' ' + display}>
                    <div className={s.modalWindow}>
                        <h3>Здравствуйте!</h3>
                        <p>Вы успешно отправили заявку.</p>
                        <button onClick={this.onClickClose}>Закрыть</button>
                    </div>
                </div>
            </div>
        );
    };
}


export default ButtonWindow;
