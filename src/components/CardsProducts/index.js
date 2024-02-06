import React from "react";
import styles from "./style.module.css";
import Button from "../Button";

export default function CardsProducts(){
    return(
        <div className={styles.containerCardsProducts}>

            <div className={styles.contentTest}>
                <hr />
                    <h2>Produtos relacionados</h2>
                <hr />
            </div>
            <p><a href="">Ver todos</a></p>

            <div className={styles.containerCards}>
                <div className={styles.containerCardProducts}>
                    <div className={styles.containerTxtProducts}>
                        <h3>Produtos</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                        <Button type="btCheckOut" onClick={()=>{
                            console.log("fui clicado")
                        }}>Confira</Button>
                    </div>
                </div>

                <div className={styles.containerCardProducts}>
                    <div className={styles.containerTxtProducts}>
                        <h3>Produtos</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                        <Button type="btCheckOut" onClick={()=>{
                            console.log("fui clicado")
                        }}>Confira</Button>
                    </div>
                </div>  
            </div>
        </div>
    )
}