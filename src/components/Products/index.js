import React, { useState, useEffect } from "react";
import styles from "./style.module.css";
import Carousel from "../Carousel";
import Button from "../Button";
import Modal from "../Modal";

export default function Products() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [productData, setProductData] = useState([]);

    const openModal = () => {
        setIsModalOpen(true);
    };

    useEffect(() => {
        const fetchProductData = async () => {
            try {
                const response = await fetch('/teste-front-end/junior/tecnologia/lista-produtos/produtos.json');
                if (!response.ok) {
                    throw new Error('Falha ao carregar os dados do produto');
                }
                const data = await response.json();
                setProductData(data.products);
            } catch (error) {
                console.error('Erro ao buscar dados do produto:', error);
            }
        };
        fetchProductData();
    }, []);

    return (
        <div className={styles.containerBoxProducts}>
            <Carousel type="containerCarouselProducts">
                {productData.map((product) => (
                    <div key={product.productName} className={styles.boxProduct}>
                        <img src={product.photo} alt={product.descriptionShort} />
                        <div className={styles.containerInfoProd}>
                            <p className={styles.descriptionInfoProd}>{product.descriptionShort}</p>
                            <p className={styles.previousPrice}>R$ {product.price}</p>
                            <p className={styles.infoParcel}>ou 2x de R$ {(product.price / 2).toFixed(2)} sem juros</p>
                            <p className={styles.infoShipping}>Frete grátis</p>
                        </div>
                        <Button type="btProduct" onClick={openModal}>Comprar</Button>
                    </div>
                ))}
            </Carousel>
            {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
        </div>
    );
}