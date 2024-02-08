import React from "react";

import RelatedProducts from "../RelatedProducts";
import Partners from "../Partners";
import Category from "../Category";
import CardsProducts from "../CardsProducts";
import NavBrands from "../NavBrands";
import Products from "../Products";

export default function Main(){
    return(
        <>
            <Category/>
            <RelatedProducts/>
            <Products/>
            <Partners/>
            <CardsProducts/>
            <NavBrands/>
        </>
    )
}