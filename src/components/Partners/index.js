import React from "react";
import styles from "./style.module.css";
import Button from "../Button";

export default function Partners(){
    return(
        <div className={styles.containerPartners}>
            <div className={styles.containerPartner}>
                <div className={styles.containerTxt}>
                    <h3>Parceiros</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur</p>
                    <Button type="btCheckOut" onClick={()=>{
                        console.log("fui clicado")
                    }}>Confira</Button>
                </div>
            </div>

            <div className={styles.containerPartner}>
                <div className={styles.containerTxt}>
                    <h3>Parceiros</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur</p>
                    <Button type="btCheckOut" onClick={()=>{
                        console.log("fui clicado")
                    }}>Confira</Button>
                </div>
            </div>  
        </div>
    )
}