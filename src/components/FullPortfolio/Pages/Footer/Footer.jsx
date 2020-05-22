import React from "react";
import styles from "./Footer.module.css";
import Icon from "../../Icon/Icon";

function Footer(props) {
    let socials = props.socials.map(social => Object.values(social));
    let userSocials = props.user.contacts.map(social => Object.entries(social));

    let contacts = userSocials.map(contact => <Icon
        picture={socials.filter(social => contact[0][0] === social[0])[0][1]} url={contact[0][1]}
        key={contact[0][0]}/>);

    return (
        <div className={styles.footer}>
            <div className={styles.myFooter}>
                <div className={styles.text}>
                    {props.user.name}
                </div>
                <div className={styles.socialBlock}>
                    {contacts}
                </div>
                <div className={styles.text}>
                    2020 &copy; All rights reserved
                </div>
            </div>
        </div>
    );
}

export default Footer;
