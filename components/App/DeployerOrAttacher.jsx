import React from "react";
import { useReach, useClasses } from "../../hooks";
import styles from "../../styles/Global.module.css";
import  "../../styles/NewStyles.css";
const DeployerOrAttacher = () => {
    const { selectDeployer, selectAttacher } = useReach();

    return (
        <div className={ useClasses(styles.subContainer) }>


<section id="aa-latest-property">
                <div className="container">
                <div className="aa-latest-property-area">
                    <div className="aa-title">
                    <h2>Select The Role</h2>      
                    </div>
                    <div className="aa-latest-properties-content">
                        <div className="row">
                            <div className="col-md-4">
                            <article className="aa-properties-item">
                                <div className="aa-tag for-sale">
                                Set the wager, deploy the contract
                                </div>
                                <div className="aa-properties-item-content">
                                <div className="aa-properties-info">
                                <br/>
                                <button onClick={ () => selectDeployer() } className="btn btn-block login-btn"title="Set the wager, deploy the contract">Deployer</button>
                                </div>
                                </div>
                            </article>
                            </div> 
                        </div>
                    </div>
                    <div className="aa-latest-properties-content">
                        <div className="row">
                            <div className="col-md-4">
                            <article className="aa-properties-item">
                                <div className="aa-tag for-sale">
                                Attach to the Deployer's contract
                                </div>
                                <div className="aa-properties-item-content">
                                <div className="aa-properties-info">
                                <br/>
                                <button onClick={ () => selectAttacher() } className="btn btn-block login-btn" title="Attach to the Deployer's contract">Attacher</button>
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

export default DeployerOrAttacher;