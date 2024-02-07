import React, {useState} from "react";
import styles from "./styles.module.css";
import Button from "../Button";
import ImgProduct from "../../pictures/produt1.png"
import QtddInput from "../QtddInput";

export default function Modal({ onClose }){
    
    const closeModal = () => {
        onClose();
      };

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <div className={styles.divBtnClose}>
                    <button onClick={closeModal}>X</button>
                </div>
                <div className={styles.divMainModal}>
                    <div>
                        <img src={ImgProduct}/>
                    </div>
                    <div className={styles.divDetails}>
                        <p className={styles.titleModal}>LOREM IPSUM DOLOR SIT AMET</p>
                        <p className={styles.priceModal}>R$ 1.499,90</p>
                        <p className={styles.descriptionModal}>Many desktop publishing packages and web page editors now many desktop publishing</p>
                        <a href="" className={styles.detailModal}>Veja mais detalhes do produto &gt;</a>
                        <QtddInput/>
                        <Button type="btBuy" onClick={()=>{
                            console.log("fui clicado")
                        }}>Comprar</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}