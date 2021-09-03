function ativaTapume(){
	let url = window.location.hostname.split('.');
	console.log(url[1]);
	let newUrl = "https://"+window.location.hostname+"/manutencao";
	if(url[1] == "myvtex"){
		document.querySelector('body').classList.remove('hide-tapume')
	} else {
		if(window.location.href != newUrl){
			
			window.location.href = newUrl;
			console.log(window.location.href,newUrl);
		}
	}
}

ativaTapume();