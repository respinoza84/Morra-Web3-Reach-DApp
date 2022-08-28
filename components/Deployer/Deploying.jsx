import React from "react";
import { useClasses } from "../../hooks";
import styles from "../../styles/Global.module.css";
import  "../../styles/NewStyles.css";
const Deploying = () => {
    return (
        <div className={ useClasses(styles.subContainer) }>
             
            Deploying... please wait.
            <div class="lds-ripple"><div></div><div></div></div>
            
        </div>
    );
};

export default Deploying;