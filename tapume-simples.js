function ativaTapume(){
	let url = window.location.hostname.split('.');
	console.log(url[1]);
	let newUrl = "https://"+window.location.hostname+"/manutencao";
	if(url[1] == "myvtex"){
		console.log('funciona');
	} else {
		if(window.location.href != newUrl){
			window.location.href = newUrl;
			console.log(window.location.href,newUrl);
		}
	}
}

ativaTapume();