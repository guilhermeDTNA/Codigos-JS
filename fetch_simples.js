fetch(`https://loja.flamengo.com.br/api/catalog_system/pub/products/search/?fq=productUrl:https://loja.flamengo.com.br/camisa-flamengo-jogo-1-adidas-2022/p`)
.then((response) => {return response.json()})
.then((data) => {
    console.log(data);
})