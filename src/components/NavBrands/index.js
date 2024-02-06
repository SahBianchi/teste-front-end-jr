import React, { useState } from "react";
import styles from "./style.module.css";

import BrandLogo from "../../pictures/LogoNavBrands.png"

export default function NavBrands(){
    return(
        <div className={styles.containerBrands}>
            <h2>Navegue por marcas</h2>

            <div className={styles.containerCircleBrand}>
                <div className={styles.circleBrand}>
                    <img src={BrandLogo}/>
                </div>

                <div className={styles.circleBrand}>
                    <img src={BrandLogo}/>
                </div> 

                <div className={styles.circleBrand}>
                    <img src={BrandLogo} className={styles.diferente}/>
                </div> 

                <div className={styles.circleBrand}>
                    <img src={BrandLogo}/>
                </div> 

                <div className={styles.circleBrand}>
                    <img src={BrandLogo}/>
                </div> 

                {/* <div className={styles.circleBrand}>
                    <img src={BrandLogo}/>
                </div>  */}

                {/* <div className={styles.circleBrand}>
                    <img src={BrandLogo}/>
                </div> 

                <div className={styles.circleBrand}>
                    <img src={BrandLogo}/>
                </div>  */}
            </div>       
        </div>
    )
}