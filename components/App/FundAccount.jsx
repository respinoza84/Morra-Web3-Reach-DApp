import React, { useState } from "react";
import { useReach, useClasses } from "../../hooks";
import styles from "../../styles/Global.module.css";

const FundAccount = () => {
    const { user, standardUnit, defaultFundAmt, fundAccount, skipFundAccount } = useReach();
    const [amount, setAmount] = useState({ amt: defaultFundAmt });

    return (
        <div >
            <section id="aa-latest-property">
                <div className="container">
                <div className="aa-latest-property-area">
                    <div className="aa-title">
                    <h2>Fund account</h2>      
                    </div>
                    <div className="aa-latest-properties-content">
                    <div className="row">
                        <div className="col-md-4">
                        <article className="aa-properties-item">

                            <div className="aa-tag for-sale">
                            Balance: { user.balance } { standardUnit }
                            </div>
                            <div className="aa-properties-item-content">
                            <div className="aa-properties-info">
                                <br></br>
                            <h4 className={ useClasses(styles.miniHeader) }>
                            Would you like to fund your account with additional { standardUnit }?
                            <br />
                            (This only works on certain DevNets)
                        </h4>
                        <input
                            className={ useClasses(styles.fields) }
                            type="number"
                            placeholder={ defaultFundAmt }
                            onChange={ (e) => setAmount({ amt: e.currentTarget.value }) }
                        />
                            </div>
                            <div className="aa-properties-about">
                            <button name="login" id="login" className="btn btn-block login-btn" onClick={ () => fundAccount(amount.amt) } >Fund Account</button>
                            <button name="login" id="login" className="btn btn-block secondary-btn"  onClick={ () => skipFundAccount() } >Skip</button>
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

export default FundAccount;