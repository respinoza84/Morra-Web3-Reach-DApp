import React, { useEffect }  from "react";

import { useClasses } from "../../hooks";
import 'bootstrap/dist/css/bootstrap.css';
import  "../../styles/NewStyles.css";
import image from '../../images/login.jpg';
import styles from "../../styles/Global.module.css";


const Wrapper = ({ children }) => {
    useEffect(() => {
        document.title = "Rodney Morra Project"
      }, [])
    return (
        <div className={ useClasses() }>
            <div className={ useClasses() }>
            <div className="container-fluid">
            <div className="row">
                <div className="col-sm-6 login-section-wrapper">
                <div className="login-wrapper my-auto">
                    <h1 className="login-title">Morra Game</h1>
                    <header className={ useClasses() } id='root'>
                        <div className={ useClasses(styles.container) }>{ children }</div>
                    </header>
                </div>
                </div>
                <div className="col-sm-6 px-0 d-none d-sm-block">
                <img src={image} alt="login image" className="login-img" />
                </div>
            </div>
            </div> 
            </div>
        </div>
    );
};

export default Wrapper;