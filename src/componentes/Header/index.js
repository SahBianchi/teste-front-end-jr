import React from "react";
import styles from "./style.module.css"
import IconShield from "../../pictures/ShieldCheck.png";
import IconTruck from "../../pictures/Truck.png";
import IconCard from "../../pictures/CreditCard.png";

export default function Header(){
    return(
        <div className={styles.containerHeader}>
            <div className={styles.containerTop}>
                <div className={styles.containerTopics}>
                        <img src={IconShield} className={styles.imgIcons}/>
                        <p>Compra 100% segura</p>
                </div>

                <div className={styles.containerTopics}>
                        <img src={IconTruck} className={styles.imgIcons}/>
                        <p>Frete grátis acima de R$ 200</p>
                </div>

                <div className={styles.containerTopics}>
                        <img src={IconCard} className={styles.imgIcons}/>
                        <p>Parcele suas compras</p>
                </div>
            </div>
        </div>
    )
}