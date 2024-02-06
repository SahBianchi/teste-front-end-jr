import React from "react";
//import styles from "./style.module.css"
import Partners from "../Partners";
import Category from "../Category";
import CardsProducts from "../CardsProducts";
import NavBrands from "../NavBrands";

export default function Main(){
    return(
        <>
            <Category/>
            <Partners/>
            <CardsProducts/>
            <NavBrands/>
        </>
    )
}