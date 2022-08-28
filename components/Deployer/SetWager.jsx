import React from "react";
import { useReach, useClasses } from "../../hooks";
import styles from "../../styles/Global.module.css";
import  "../../styles/NewStyles.css";


const SetWager = () => {
    const { handleWager, defaultWager, standardUnit, setWager } = useReach();
    return (
        <div >
                <span className={ useClasses(styles.littleText) }>{ standardUnit }</span>
                <input
                    className={ useClasses(styles.fields) }
                    type="number"
                    placeholder={ defaultWager }
                    onChange={ (e) => setWager(e.currentTarget.value) }
                />
            <button className="btn btn-block login-btn"  onClick={ () => handleWager() }>Set Wager</button>
        </div>
    );
};

export default SetWager;