fetch("https://loja.flamengo.com.br/copo-flamengo-manto-sagrado-1-2022/p").then(function(response){
	return response.text()
}).then(function(html){
    var parser = new DOMParser();
    var doc = parser.parseFromString(html, 'text/html');
    
	const variants = doc.querySelector(".showcase-default");

	console.log(variants)
})