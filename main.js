$(function(){
	$('#painelIpt').focus();
  	PAINEL.DigitarTexto("\t\t-=Menu Principal=-\n\n1.\tIniciar Jogo\n2.\tCarregar Jogo\n3.\tSair");
  	prosseguir = verificarMenuPrincipal;
});

function verificarMenuPrincipal(mensagem){
	switch(mensagem){
		case "1":
			alert("Iniciando (lie)");
			break;
		case "2":
			$('#arquivo').click();
			prosseguir = testArquivo;
			break;
		case "3":
			alert("Saindo !");
			break;
		default:
			alert("Ue?");
	}

}

function testArquivo(){
	console.log($('#arquivo').prop('files'));

	var reader = new FileReader();
    reader.onload = (function(reader)
    {
        return function()
        {
            var contents = reader.result.split("||");

            var info = "";
            info += "Nome: " + contents[0] + "<br/>";
            info += "Classe: " + contents[1] + "<br/>";
            info += "Skills: <br/>";
            var skills = contents[2].split("|");
            for(var skill of skills){
            	console.log(skill);
            	info += "&nbsp;&nbsp;-" + skill + "<br/>";
            }

            $('#saveLoad').html(info);
        }
    })(reader);

    reader.readAsText($('#arquivo').prop('files')[0], 'ISO-8859-1');
}