import React from "react";
import { useClasses } from "../../hooks";
import styles from "../../styles/Global.module.css";
import  "../../styles/NewStyles.css";
const Wrapper = ({ children }) => {
    return (
        <div className={ useClasses(styles.subHeader) }>
            <h2 className={ useClasses(styles.theme) }></h2>
            <div className={ useClasses(styles.container) }> 
            </div>
            <div className="login-wrapper">
                <section id="aa-latest-property">
                    <div className="container">
                    <div className="aa-latest-property-area">
                        <div className="aa-title">
                        <h2>Ready to deploy</h2>      
                        </div>
                        <div className="aa-latest-properties-content">
                            <div className="row">
                                <div className="col-md-4">
                                <article className="aa-properties-item">
                                    <div className="aa-tag for-sale">
                                    Deployer -- Alice
                                    </div>
                                    <div className="aa-properties-item-content">
                                    <div className="aa-properties-info">
                                    <br/>
                                    { children }
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
        </div>  
    );
};

export default Wrapper;