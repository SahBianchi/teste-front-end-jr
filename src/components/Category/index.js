import React from "react";
import styles from "./style.module.css";
import ButtonCategory from "../ButtonCategory";

import Tech from "../../pictures/monitorar-tablet-e-smartohone 1.png";
import Supermarket from "../../pictures/supermercados 1.png";
import Drinks from "../../pictures/whiskey.png";
import Tools from "../../pictures/ferramentas 1.png";
import Health from "../../pictures/cuidados-de-saude 1.png";
import Fitness from "../../pictures/corrida 1.png";
import Fashion from "../../pictures/moda 1.png";


export default function Category(){
    return(
        <div className={styles.containerCategory}>
            <div className={styles.btCategory}>
                <ButtonCategory type="selected" onClick={()=>{
                    console.log("fui clicado")
                }}><img src={Tech} alt="icone de um computador"/></ButtonCategory>
                <p className={styles.nameCatSelect}>Tecnologia</p>
            </div>

            <div className={styles.btCategory}>
                <ButtonCategory type="notSelected" onClick={()=>{
                    console.log("fui clicado")
                }}><img src={Supermarket} alt="icone de um supermercado"/></ButtonCategory>
                <p className={styles.nameCatNoSelect}>Supermercado</p>
            </div>

            <div className={styles.btCategory}>
                <ButtonCategory type="notSelected" onClick={()=>{
                    console.log("fui clicado")
                }}><img src={Drinks} alt="icone de garrafa de bebida"/></ButtonCategory>
                <p className={styles.nameCatNoSelect}>Bebidas</p>
            </div>

            <div className={styles.btCategory}>
                <ButtonCategory type="notSelected" onClick={()=>{
                    console.log("fui clicado")
                }}><img src={Tools} alt="icone de ferramentas"/></ButtonCategory>
                <p className={styles.nameCatNoSelect}>Ferramentas</p>
            </div>

            <div className={styles.btCategory}>
                <ButtonCategory type="notSelected" onClick={()=>{
                    console.log("fui clicado")
                }}><img src={Health} alt="icone de uma mao e um coração"/></ButtonCategory>
                <p className={styles.nameCatNoSelect}>Saúde</p>
            </div>

            <div className={styles.btCategory}>
                <ButtonCategory type="notSelected" onClick={()=>{
                    console.log("fui clicado")
                }}><img src={Fitness} alt="icone de uma pessoa correndo na esteira"/></ButtonCategory>
                <p className={styles.nameCatNoSelect}>Esportes e Fitness</p>
            </div>

            <div className={styles.btCategory}>
                <ButtonCategory type="notSelected" onClick={()=>{
                    console.log("fui clicado")
                }}><img src={Fashion} alt="icone de um vestido, salto e diamante"/></ButtonCategory>
                <p className={styles.nameCatNoSelect}>Moda</p>
            </div>
        </div>
    )
}