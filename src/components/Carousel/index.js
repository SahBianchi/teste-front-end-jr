import React, { useState, useEffect } from "react";
import styles from "./style.module.css";
import Button from "../Button";

import ArrayNext from "../../pictures/ArrayNext.png";
import ArrayPrev from "../../pictures/ArrayPrev.png";

export default function Carousel({type, children}){
  const [containerWidth, setContainerWidth] = useState(0);
  const [scrollAmount, setScrollAmount] = useState(0);
  const [numLogos, setNumLogos] = useState(0);

  useEffect(() => {
    const container = document.querySelector(`.${styles[type]}`);
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
        <>
            <div className={styles[type]}>
                <div className={styles.carousel} style={{ transform: `translateX(-${scrollAmount}px)` }}>
                    {children}
                </div>

                <Button type="buttonCarroselPrev" onClick={handlePrevClick}>
                    <img src={ArrayPrev} alt="Seta para voltar"/>
                </Button>
                <Button type="buttonCarroselNext" onClick={handleNextClick}>
                    <img src={ArrayNext} alt="Seta para avançar"/>
                </Button>
            </div>
        </>
    )
}