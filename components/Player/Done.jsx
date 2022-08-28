import React from "react";
import { useClasses, useReach } from "../../hooks";
import styles from "../../styles/Global.module.css";
import  "../../styles/NewStyles.css";
const Done = () => {
    const { outcome, total, who } = useReach();

    return (
        <div className={ useClasses(styles.subContainer) }>
            <h2 className={ useClasses() }>
                Thank you for playing.
            </h2>
            <h3 className={ useClasses() }>
                { outcome }
                <br /><br />
                The total fingers played were <br></br>{ total }, <br></br>and { who } alone guessed it right.
            </h3>
           
        </div>
    );
};

export default Done;