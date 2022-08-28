import React from "react";
import { useReach, useClasses } from "../../hooks";
import styles from "../../styles/Global.module.css";
import  "../../styles/NewStyles.css";

const sleep = (milliseconds) =>
    new Promise((resolve) => setTimeout(resolve, milliseconds));


const WaitingForAttacher = () => {
    const { contract } = useReach();

    const copyToClipboard = async (button) => {
        navigator.clipboard.writeText(contract.ctcInfoStr);
        const origInnerHTML = button.innerHTML;
        button.innerHTML = "Copied!";
        button.disabled = true;
        await sleep(1000);
        button.innerHTML = origInnerHTML;
        button.disabled = false;
    };

    return (
        <div className="login-wrapper" >
            <div className={ useClasses(styles.subContainer) }>
                <h2 className={ useClasses() }> Waiting for the other participant to join...</h2>
                <h3 className={ useClasses() }> Please give them this contract info:</h3>
                <pre className={ useClasses(styles.fields) }>{ contract.ctcInfoStr }</pre>
                <button className="btn btn-block login-btn" onClick={ (e) => copyToClipboard(e.currentTarget.value) }>
                    Copy to clipboard
                </button>
            </div>
        </div>
    );
};

export default WaitingForAttacher;