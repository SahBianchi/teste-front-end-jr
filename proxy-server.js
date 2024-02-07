require = require("esm")(module /*, options*/);

const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = 3001;

app.get('/products', (req, res) => {
    fetch('https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Falha ao carregar os dados do produto');
            }
            return response.json();
        })
        .then(data => {
            res.json(data);
        })
        .catch(error => {
            console.error('Erro ao buscar dados do produto:', error);
            res.status(500).json({ error: 'Erro ao buscar dados do produto' });
        });
});

app.listen(PORT, () => {
    console.log(`Servidor proxy está rodando em http://localhost:${PORT}`);
});


