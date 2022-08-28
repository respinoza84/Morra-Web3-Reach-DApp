import React from "react";
import { useReach, useClasses } from "../../hooks";
import styles from "../../styles/Global.module.css";
import  "../../styles/NewStyles.css";
const ConnectAccount = () => {
    const { connectAccount } = useReach();

    return (
        <div className={ useClasses(styles.subContainer) }>
            
            <div className={ useClasses() }>
                <span className="login-wrapper-footer-text">Please wait while we connect your account. If this takes more than a few seconds, there may be something wrong.</span>
            </div>
            <button name="login" id="login" className="btn btn-block login-btn"  onClick={ connectAccount }>Connect to the Wallet</button>
           
        </div>
    );
};

export default ConnectAccount;