import React from "react";
import styles from "./style.module.css";
import Button from "../Button";

import IconFacebook from "../../pictures/023-facebook.png";
import IconInstagram from "../../pictures/044-instagram.png";
import IconYouTube from "../../pictures/116-youtube.png";

import LogoVisa from "../../pictures/visa.png";
import LogoElo from "../../pictures/elo.png";
import LogoAlelo from "../../pictures/alelo.png";
import LogoDiners from "../../pictures/dinners.png";
import LogoIfood from "../../pictures/ifood.png";
import LogoMastercard from "../../pictures/mastercard.png";
import LogoPix from "../../pictures/pix.png";
import LogoAmex from "../../pictures/amex.png";
import LogoTicket from "../../pictures/ticket.png";
import LogoSodexo from "../../pictures/sodexo.png";

import LogoVtexFooter from "../../pictures/LogoVtexFooter.png";
import LogoEconverse from "../../pictures/LogoEconverse.png"

export default function Footer(){
    return(
        <div className={styles.containerFooter}>
            <div className={styles.containerAbout}>
                <h6 className={styles.titleFooter}>Sobre nós</h6>
                <div>
                    <ul className={styles.listFooter}>
                        <li><a href="#">Conheça</a></li>
                        <li><a href="#">Como Comprar</a></li>
                        <li><a href="#">Indicação e Desconto</a></li>
                    </ul>
                </div>

                <div>
                    <img src={IconFacebook}/>
                    <img src={IconInstagram}/>
                    <img src={IconYouTube}/>
                </div>
            </div>  

            <div className={styles.containerInformation}>
                <h6 className={styles.titleFooter}>INFORMAÇÕES ÚTEIS</h6>
                <div>
                    <ul className={styles.listFooter}>
                        <li><a href="#">FALE CONOSCO</a></li>
                        <li><a href="#">DÚVIDAS</a></li>
                        <li><a href="#">Prazos de Entrega</a></li>
                        <li><a href="#">Formas de Pagamento</a></li>
                        <li><a href="#">Política de privacidade</a></li>
                        <li><a href="#">Trocas e Devoluções</a></li>
                    </ul>
                </div>
            </div>  

            <div className={styles.containerPayment}>
                <h6 className={styles.titleFooter}>FORMAS DE PAGAMENTO</h6>
                <div>
                    <img src={LogoVisa}/>
                    <img src={LogoElo}/>
                    <img src={LogoAlelo}/>
                    <img src={LogoDiners}/>
                    <img src={LogoIfood}/>
                    <img src={LogoMastercard}/>
                    <img src={LogoPix}/>
                    <img src={LogoAmex}/>
                    <img src={LogoTicket}/>
                    <img src={LogoSodexo}/>
                </div>
            </div>

            <div className={styles.containerForm}>
                <h6>Cadastre-se e Receba nossas</h6>
                <h5>novidades e promoções</h5>
                <p>Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia lorem ipsum</p>
                <div>
                    <input type="text" placeholder="Seu e-mail" className={styles.inputSearch}/>
                    <Button type="btOk" onClick={()=>{
                    console.log("fui clicado")
                    }}>OK</Button>
                </div>
            </div>

            <div className={styles.containeCopy}>
                <div>
                    <p>
                        Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas imagens são de propriedade de seus respectivos donos.
                    </p>

                    <p>
                        É vedada a reprodução, total ou parcial, de qualquer conteúdo sem expressa autorização.
                    </p>
                </div>

                <div>
                    <img src={LogoVtexFooter}/>
                    <img src={LogoEconverse}/>
                </div>
            </div>       
        </div>
    )
}