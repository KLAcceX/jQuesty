function EhVazio(Objeto){
	console.log(Objeto);
	if(Objeto == undefined || Objeto == null){
		return true;
	}
	return false;
}

function ChecarCarregar(Objeto){
	return EhVazio(Objeto) ? "C" : "Rec";
}

function JogarDisponivel(){
	return (EhVazio(Classes) && EhVazio(Habilidades) && EhVazio(Itens) && EhVazio(Historia));
}