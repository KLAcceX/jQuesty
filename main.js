$(function(){
	$('#painelIpt').focus();
	MenuPrincipal();
});

function MenuPrincipal(){
	  	var Mensagem = "\t\t-=Menu Principal=-\n" +
	  	"\n1.\t" + (JogarDisponivel() ? "Jogar (indisponível)" : "Jogar") +
	  		"\n2.\t" + ChecarCarregar(Classes) + "arregar Arquivo de Classes" +
	  		"\n3.\t" + ChecarCarregar(Habilidades) + "arregar Arquivo de Habilidades" +
	  		"\n4.\t" + ChecarCarregar(Itens) + "arregar Arquivo de Itens" +
	  		"\n5.\t" + ChecarCarregar(Historia) + "arregar Arquivo de História" +
	  		"\n6.\tSair\n";


	  	PAINEL.DigitarTexto(Mensagem);
	  	Prosseguir = VerificarMenuPrincipal;
  	}

function VerificarMenuPrincipal(Mensagem){
	switch(Mensagem){
		case "2":
		case "3":
		case "4":
		case "5":
			ArqTratado = parseInt(Mensagem);
			$('#arquivo').click();
			Prosseguir = MenuPrincipal;
			break;
		default:
	}

}