import React from "react";
import styles from "./styles.module.css";
import Button from "../Button";
import QtddInput from "../QtddInput";

export default function Modal({ onClose, product }){
    
    const closeModal = () => {
        console.log("Fechando modal");
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
                            <img src={product.photo} alt={product.descriptionShort} />
                        </div>
                        <div className={styles.divDetails}>
                            <p className={styles.titleModal}>{product.productName}</p>
                            <p className={styles.priceModal}>R$ {product.price}</p>
                            <p className={styles.descriptionModal}>{product.descriptionShort}</p>
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