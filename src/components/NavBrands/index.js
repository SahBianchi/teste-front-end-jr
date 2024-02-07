import React from "react";
import styles from "./style.module.css";
import Carousel from "../Carousel";

import BrandLogo from "../../pictures/LogoNavBrands.png"

export default function NavBrands(){
    return(
        <div className={styles.containerBrands}>
            <h2>Navegue por marcas</h2>

            <Carousel type="containerCarouselBrands">
                <div className={styles.logo}><img src={BrandLogo} alt="Logo 1"/></div>
                <div className={styles.logo}><img src={BrandLogo} alt="Logo 2"/></div>
                <div className={styles.logo}><img src={BrandLogo} alt="Logo 3"/></div>
                <div className={styles.logo}><img src={BrandLogo} alt="Logo 3"/></div>
                <div className={styles.logo}><img src={BrandLogo} alt="Logo 3"/></div>
                <div className={styles.logo}><img src={BrandLogo} alt="Logo 3"/></div>
                <div className={styles.logo}><img src={BrandLogo} alt="Logo 3"/></div>
                <div className={styles.logo}><img src={BrandLogo} alt="Logo 3"/></div>
                <div className={styles.logo}><img src={BrandLogo} alt="Logo 3"/></div>
                <div className={styles.logo}><img src={BrandLogo} alt="Logo 3"/></div>
                <div className={styles.logo}><img src={BrandLogo} alt="Logo 3"/></div>
                <div className={styles.logo}><img src={BrandLogo} alt="Logo 3"/></div>
                <div className={styles.logo}><img src={BrandLogo} alt="Logo 3"/></div>
            </Carousel>
        </div>
    )
}