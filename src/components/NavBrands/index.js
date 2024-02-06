import React, { useState, useEffect } from "react";
import styles from "./style.module.css";

import BrandLogo from "../../pictures/LogoNavBrands.png"
import ArrayNext from "../../pictures/ArrayNext.png"
import ArrayPrev from "../../pictures/ArrayPrev.png"

export default function NavBrands(){
    const [containerWidth, setContainerWidth] = useState(0);
  const [scrollAmount, setScrollAmount] = useState(0);
  const [numLogos, setNumLogos] = useState(0);

  useEffect(() => {
    const container = document.querySelector(`.${styles.containerCarousel}`);
    if (container) {
      setContainerWidth(container.offsetWidth);
      setNumLogos(container.children.length);
    }
  }, []);

  const handleNextClick = () => {
    if (scrollAmount < containerWidth * (numLogos - 1)) {
      setScrollAmount(scrollAmount + containerWidth);
    }
  };

  const handlePrevClick = () => {
    if (scrollAmount > 0) {
      setScrollAmount(scrollAmount - containerWidth);
    }
  };

    return(
        <div className={styles.containerBrands}>
            <h2>Navegue por marcas</h2>

            <div className={styles.containerCarousel}>
                <div className={styles.carousel} style={{ transform: `translateX(-${scrollAmount}px)` }}>
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
                </div>
                <button className={`${styles.buttonCarrosel} ${styles.prev}`} onClick={handlePrevClick}><img src={ArrayPrev} alt="Seta para voltar"/></button>

                <button className={`${styles.buttonCarrosel} ${styles.next}`} onClick={handleNextClick}><img src={ArrayNext} alt="Seta para ir para frente"/></button>
            </div>
        </div>
    )
}





