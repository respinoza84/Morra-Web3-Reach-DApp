import React from "react";
import { useClasses } from "../../hooks";
import styles from "../../styles/Global.module.css";

const Attaching = () => {
    return (
        <div className={ useClasses(styles.subContainer) }>Attaching, please wait...<div class="lds-ripple"><div></div><div></div></div></div>
    );
};

export default Attaching;