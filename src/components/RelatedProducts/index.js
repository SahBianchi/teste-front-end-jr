import React from "react";
import styles from "./style.module.css";

export default function RelatedProducts(){
    return(
        <div className={styles.containerRelatedProducts}>

            <div className={styles.contentTitleSubProducts}>
                <hr />
                    <h2>Produtos relacionados</h2>
                <hr />
            </div>

            <div className={styles.containerSubProducts}>
                <table className={styles.listSubProducts}>
                    <tr>
                        <td className={styles.listSubProductsActive}>celular</td>
                        <td>acessórios</td>
                        <td>tablets</td>
                        <td>NOTEBOOKS</td>
                        <td>TVs</td>
                        <td>Ver todos</td>
                    </tr>
                </table>

            </div>

        </div>
    )
}