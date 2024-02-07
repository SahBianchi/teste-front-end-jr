import React, { useState, useEffect } from "react";
import styles from "./style.module.css";
import Carousel from "../Carousel";
import Button from "../Button";
import Modal from "../Modal";

import ImgProduct from "../../pictures/produt1.png"

export default function Products(){
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };
    
    // const [productData, setProductData] = useState([]);

    // useEffect(() => {
    //     const fetchProductData = async () => {
    //         try {
    //             const response = await fetch('https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json');
    //             if (!response.ok) {
    //                 throw new Error('Falha ao carregar os dados do produto');
    //             }
    //             const data = await response.json();
    //             setProductData(data);
    //             console.log(data)
    //         } catch (error) {
    //             console.error('Erro ao buscar dados do produto:', error);
    //         }
    //     };
    //     fetchProductData();
    // }, []);

    return(
        <div className={styles.containerBoxProducts}>
            <Carousel type="containerCarouselProducts">
            <div className={styles.boxProduct}>
                    <img src={ImgProduct}/>
                    <div className={styles.containerInfoProd}>
                        <p className={styles.descriptionInfoProd}>descrição</p>
                        <p className={styles.previousPrice}>R$ 30,90</p>
                        <p className={styles.currentP1rice}>R$ 10,00</p>
                        <p className={styles.infoParcel}>ou 2x de R$ 49,95 sem juros</p>
                        <p className={styles.infoShipping}>Frete grátis</p>
                    </div>

                    <Button type="btProduct" onClick={openModal}>Comprar</Button>                
                </div>

                <div className={styles.boxProduct}>
                    <img src={ImgProduct}/>
                    <div className={styles.containerInfoProd}>
                        <p className={styles.descriptionInfoProd}>descrição</p>
                        <p className={styles.previousPrice}>R$ 30,90</p>
                        <p className={styles.currentP1rice}>R$ 10,00</p>
                        <p className={styles.infoParcel}>ou 2x de R$ 49,95 sem juros</p>
                        <p className={styles.infoShipping}>Frete grátis</p>
                    </div>

                    <Button type="btProduct" onClick={()=>{
                        console.log("fui clicado")
                    }}>Comprar</Button>                
                </div>

                <div className={styles.boxProduct}>
                    <img src={ImgProduct}/>
                    <div className={styles.containerInfoProd}>
                        <p className={styles.descriptionInfoProd}>descrição</p>
                        <p className={styles.previousPrice}>R$ 30,90</p>
                        <p className={styles.currentP1rice}>R$ 10,00</p>
                        <p className={styles.infoParcel}>ou 2x de R$ 49,95 sem juros</p>
                        <p className={styles.infoShipping}>Frete grátis</p>
                    </div>

                    <Button type="btProduct" onClick={()=>{
                        console.log("fui clicado")
                    }}>Comprar</Button>                
                </div>

                <div className={styles.boxProduct}>
                    <img src={ImgProduct}/>
                    <div className={styles.containerInfoProd}>
                        <p className={styles.descriptionInfoProd}>descrição</p>
                        <p className={styles.previousPrice}>R$ 30,90</p>
                        <p className={styles.currentP1rice}>R$ 10,00</p>
                        <p className={styles.infoParcel}>ou 2x de R$ 49,95 sem juros</p>
                        <p className={styles.infoShipping}>Frete grátis</p>
                    </div>

                    <Button type="btProduct" onClick={()=>{
                        console.log("fui clicado")
                    }}>Comprar</Button>                
                </div>

                <div className={styles.boxProduct}>
                    <img src={ImgProduct}/>
                    <div className={styles.containerInfoProd}>
                        <p className={styles.descriptionInfoProd}>descrição</p>
                        <p className={styles.previousPrice}>R$ 30,90</p>
                        <p className={styles.currentP1rice}>R$ 10,00</p>
                        <p className={styles.infoParcel}>ou 2x de R$ 49,95 sem juros</p>
                        <p className={styles.infoShipping}>Frete grátis</p>
                    </div>

                    <Button type="btProduct" onClick={()=>{
                        console.log("fui clicado")
                    }}>Comprar</Button>                
                </div>

            </Carousel>
            {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
            {/* {productData.map((product, index) => (
                <div className={styles.boxProduct}>
                    <img src={ImgProduct}/>
                    <div className={styles.containerInfoProd}>
                        <p className={styles.descriptionInfoProd}>descrição</p>
                        <p className={styles.previousPrice}>R$ 30,90</p>
                        <p className={styles.currentP1rice}>R$ 10,00</p>
                        <p className={styles.infoParcel}>ou 2x de R$ 49,95 sem juros</p>
                        <p className={styles.infoShipping}>Frete grátis</p>
                    </div>

                    <Button type="btProduct" onClick={()=>{
                        console.log("fui clicado")
                    }}>Comprar</Button>                
                </div>
            ))} */}
            

        </div>
    )
}
