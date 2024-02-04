import React from "react";
import styles from "./style.module.css"
import IconShield from "../../pictures/ShieldCheck.png";
import IconTruck from "../../pictures/Truck.png";
import IconCard from "../../pictures/CreditCard.png";

export default function Top(){
    return(
        <div className={styles.container}>
            <div className={styles.containerTop}>
                <div className={styles.containerTopics}>
                        <img src={IconShield} className={styles.imgIcons}/>
                        <p>Compra <span className={styles.emphasis}>100% segura</span></p>
                </div>

                <div className={styles.containerTopics}>
                        <img src={IconTruck} className={styles.imgIcons}/>
                        <p><span className={styles.emphasis}>Frete grátis</span> acima de R$ 200</p>
                </div>

                <div className={styles.containerTopics}>
                        <img src={IconCard} className={styles.imgIcons}/>
                        <p><span className={styles.emphasis}>Parcele</span> suas compras</p>
                </div>
            </div>
        </div>
    )
}