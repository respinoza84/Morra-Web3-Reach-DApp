import React, { useState } from "react";
import { useReach, useClasses } from "../../hooks";
import styles from "../../styles/Global.module.css";
import  "../../styles/NewStyles.css";

const AcceptTerms = () => {
    const [disabled, setDisabled] = useState(false);
    const { wager, standardUnit, termsAccepted } = useReach();

    return (
        <div className="login-wrapper">

            <section id="aa-latest-property">
                <div className="container">
                <div className="aa-latest-property-area">
                    <div className="aa-title">
                    <h2>The terms of the game are:</h2>      
                    </div>
                    <div className="aa-latest-properties-content">
                    <div className="row">
                        <div className="col-md-4">
                        <article className="aa-properties-item">

                            <div className="aa-tag for-sale">
                            Wager: { wager } { standardUnit }
                            </div>
                            <div className="aa-properties-item-content">
                            <div className="aa-properties-info">
                                <br></br>
                                Winner takes all <br />
                                We play until a winner is discerned
                       
                            </div>
                            <div className="aa-properties-about">
                            <button name="login" id="login" className="btn btn-block login-btn" disabled={ disabled } onClick={ () => {
                            setDisabled(true);
                            termsAccepted();
                            } }>Pay wager</button>
                           
                            </div>
                            
                            </div>
                        </article>
                        </div>
                        
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </div>
    );
};

export default AcceptTerms;