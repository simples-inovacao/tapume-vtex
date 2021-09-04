function ativaTapume(){
	let url = window.location.hostname.split('.');
	let newUrl = "https://"+window.location.hostname+"/manutencao";
	if(url[1] == "myvtex" || url[1] == "vtexcommercestable"){
		document.querySelector('body').classList.remove('hide-tapume')
	} else {
		if(window.location.href != newUrl){
			window.location.href = newUrl;
		}
	}
}

ativaTapume();