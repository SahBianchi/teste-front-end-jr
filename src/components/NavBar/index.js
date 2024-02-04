import React from "react";
import styles from "./style.module.css"

import LogoNav from "../../pictures/LogoNav.png"
import IconLupa from "../../pictures/MagnifyingGlass.png"
import IconBox from "../../pictures/Box.png"
import IconHeart from "../../pictures/Heart.png"
import IconUser from "../../pictures/UserCircle.png"
import IconCart from "../../pictures/ShoppingCart.png"
import InconCrown from "../../pictures/CrownSimple.png"

export default function NavBar(){
    return(
        <div className={styles.containerMain}>
            <nav className={styles.containerSearch}>
                 <img src={LogoNav}/>
                 <div className={styles.boxSearch}>
                    <input type="text" placeholder="O que você está buscando?" className={styles.inputSearch}/>
                    <img src={IconLupa}/>
                 </div>
                 <img src={IconBox}/>
                 <img src={IconHeart}/>
                 <img src={IconUser}/>
                 <img src={IconCart}/>
            </nav>

            <nav className={styles.containerCategories}>
                <ul className={styles.listCategories}>
                    <li><a href="" className={styles.aCategories}>Todas Categorias</a></li>
                    <li><a href="" className={styles.aCategories}>Supermercado</a></li>
                    <li><a href="" className={styles.aCategories}>Livros</a></li>
                    <li><a href="" className={styles.aCategories}>Moda</a></li>
                    <li><a href="" className={styles.aCategories}>Lançamentos</a></li>
                    <li><a href="" className={`${styles.aCategories} ${styles.pink}`}>Ofertas do dia</a></li>
                    <li><a href="" className={`${styles.aSignature} ${styles.aCategories}`}><img src={InconCrown} className={styles.iconCrown}/>Assinatura</a></li>
                </ul>
            </nav>
        </div>
    )
}