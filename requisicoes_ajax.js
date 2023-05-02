var usuario = {
    "firstName": $("#nome").val(),
    "lastName": $("#sobrenome").val(),
    "email":$("#email").val(),
    "isNewsletterOptIn": true
}

$.ajax({
    url: 'https://lojaflaonline.com.br/estoque-numeros/index.php?numero=13&tipo=&produto=2671',
    type: 'put',
    crossDomain: true,
    dataType: 'json',
    contentType: 'application/json',
    success: function (data) {
        console.log("REALIZADA COM SUCESSO");
    },
    error: function (xhr, status) {
        console.log("ERRO");
    },
    data: JSON.stringify(usuario)
});