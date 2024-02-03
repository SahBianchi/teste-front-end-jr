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
                 <div>
                    <input type="text" placeholder="O que você está buscando?"/>
                    <img src={IconLupa}/>
                 </div>
                 <img src={IconBox}/>
                 <img src={IconHeart}/>
                 <img src={IconUser}/>
                 <img src={IconCart}/>
            </nav>
            
            <hr/>

            <nav className={styles.containerCategories}>
                <ul className={styles.listCategories}>
                    <li><a href="">Todas Categorias</a></li>
                    <li><a href="">Supermercado</a></li>
                    <li><a href="">Livros</a></li>
                    <li><a href="">Moda</a></li>
                    <li><a href="">Lançamentos</a></li>
                    <li><a href="">Ofertas do dia</a></li>
                    <li><a href=""><img src={InconCrown}/>Assinatura</a></li>
                </ul>
            </nav>
        </div>
    )
}