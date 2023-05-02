const currentFilter = document.querySelector("#platform_filter .nice-select .current");
		
MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

var observer = new MutationObserver(function(mutations, observer) {
	
	const currentFilterValue = currentFilter.innerText.toLowerCase();
	
	if(currentFilterValue == "todas"){
		document.querySelectorAll('.stores_list>article').forEach((article) => article.classList.remove("hide"))
	} else{
		document.querySelectorAll('.stores_list>article').forEach((article) => {
			article.dataset.platform != currentFilterValue ? article.classList.add("hide") : article.classList.remove("hide")
		})
	}	
});


observer.observe(currentFilter, {
	attributes: true,
	characterData: true,
	subtree: true,
	attributeOldValue: true,
	childList: true,
	characterDataOldValue: true
});