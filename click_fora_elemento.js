document.addEventListener('click', function(e) {
    //Elemento-pai que será verificado
    var container = document.querySelector("nav.navbar");
    if (!container.contains(e.target)) {
        console.log("Clickou fora")
    } else{
        console.log("Clickou dentro")
    }
});