async function addToCart(cpf, nota_fiscal) {
	const bodyData = {
      'items': [{
        'cnpj_cpf': cpf,
        'nota_fiscal': nota_fiscal
      }]
    }
    
  const res = await fetch('https://5p9h1eo176.execute-api.us-east-1.amazonaws.com/prod/rastreamento-carga', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    mode: "no-cors",
    body: JSON.stringify(bodyData)
  })
  const resUrl = await res.url
  const data = await res

    console.log(data)
}

addToCart(13267670624, 14960)