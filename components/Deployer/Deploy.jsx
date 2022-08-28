import React from "react";
import { useReach, useClasses } from "../../hooks";
import styles from "../../styles/Global.module.css";
import  "../../styles/NewStyles.css";
const Deploy = () => {
    const { deploy, wager, standardUnit } = useReach();

    return (
        <div className={ useClasses(styles.subContainer) }>
            <h3 className={ useClasses() }>Wager: <strong>{ wager }</strong> { standardUnit }</h3>
            <span>(required to deploy)</span>
            <div className={ useClasses() }>
            <button className="btn btn-block login-btn" onClick={ () => deploy() } > Deploy </button>
            </div>
        </div>
    );
};

export default Deploy;