import React, { useState } from "react";
import { useReach, useClasses } from "../../hooks";
import styles from "../../styles/Global.module.css";
import  "../../styles/NewStyles.css";
const Attach = () => {
    const [ctcInfoStr, setCtcInfoStr] = useState("");
    const { attach } = useReach();

    return (
        <div className="login-wrapper">
            <h3 className={ useClasses() }>Paste the contract:</h3>
            <div className={ useClasses(styles.container) }>
                <textarea
                    spellCheck="false"
                    className={ useClasses(styles.fields) }
                    onChange={ (e) => setCtcInfoStr(e.currentTarget.value) }
                    placeholder="Enter contract info"
                />
                <button className="btn btn-block login-btn" disabled={ !ctcInfoStr } onClick={ () => attach(ctcInfoStr) }>
                    Attach
                </button>
            </div>
        </div>

    );
};

export default Attach;