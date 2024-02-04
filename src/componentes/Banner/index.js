import React from "react";
import styles from "./style.module.css"
import Button from "../Button"

export default function Banner(){
    return(
        <div className={styles.container}>
            <div className={styles.containerBanner}>
                <p>Venha conhecer nossas promoções</p>
                <p>50% Off nos produtos</p>
                <Button type="btProduct" onClick={()=>{
                    console.log("fui clicado")
                }}>Ver produto</Button>
            </div>
        </div>
    )
}