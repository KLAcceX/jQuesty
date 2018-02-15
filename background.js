var Prosseguir;

var ArqTratado = 0;
const CLASSES_ARQ = 2;
const HABILIDADES_ARQ = 3;
const ITENS_ARQ = 4;
const HISTORIA_ARQ = 5;

var Classes;
var Habilidades;
var Itens;
var Historia;

const BACKGROUND = {
  CursorDelay : 200,
  MensagemIntervalo : 50,
  Intervalo : function() {
    $("#painelIpt").prop('contenteditable', true);
    $("#painelIpt").focus();
    setInterval(function () {
      if ($('#iptCursor').css('visibility') === 'visible') {
          $('#iptCursor').css({ visibility : 'hidden' });
      } else {
          $('#iptCursor').css({ visibility : 'visible' });
      }
    }, BACKGROUND.CursorDelay);
  },
  LimparIntervalo : function() {
    $("#painelIpt").prop('contenteditable', false);
    $('#iptCursor').css({ visibility : 'hidden' });
    clearInterval(BACKGROUND.Intervalo);
  },
};

const PAINEL = {
  Limpar : function(){
    $('#painelTxt').text('');
    $('#painelIpt').text('');
  },
  Digitar : function(mensagem, index){ //só será usado em casos muito específicos |-| mudança futura ??
    if (index < mensagem.length) {
      $('#painelTxt').append(mensagem[index++]);
      var timeout = setTimeout(function () { PAINEL.Digitar(mensagem, index); }, BACKGROUND.MensagemIntervalo);
    }else{
      BACKGROUND.MensagemIntervalo = 50;
      BACKGROUND.Intervalo();
    }
  },
  DigitarTexto : function(mensagem){
    PAINEL.Limpar();
    BACKGROUND.LimparIntervalo();
    PAINEL.Digitar(mensagem, 0);
  }
};

$(document).on('keydown',function(e){
    if (e.which === 13) {
      if($('#painelIpt').text().length > 0){
        Prosseguir($('#painelIpt').text());
        BACKGROUND.MensagemIntervalo = 50;
      }else{
        BACKGROUND.MensagemIntervalo = 0;
      }
      e.preventDefault();
    }

    if($('#painelIpt').width() + 10 > $('#painel').width() && e.which !== 0 && e.keyCode !== 0 &&
          e.which !== 8 && e.keyCode !== 13 && !e.ctrlKey && !e.metaKey && !e.altKey && !e.shiftKey){
        e.preventDefault();
    }
});

$(document).on('mousedown',function(e)
{
    e.preventDefault();
});

$(document).on('change', '#arquivo', function(event){
    LerArquivo();
});

function LerArquivo(){
  console.log($('#arquivo').prop('files'));

  var Reader = new FileReader();
  Reader.onload = (function(reader)
  {
      return function()
      {
        var Json = JSON.parse(reader.result);
        switch(ArqTratado){
          case CLASSES_ARQ:
            Classes = Json;
          break;
          case HABILDIADES_ARQ:
            Habilidades = Json;
          break;
          case ITENS_ARQ:
            Itens = Json;
          break;
          case HISTORIA_ARQ:
            Historia = Json;
          break;
          default:
            alert("Tem algo de errado aí!");

        }

        $('#saveLoad').html(reader.result);
        $('#arquivo').val('');
        Prosseguir();
      }
  })(Reader);

  Reader.readAsText($('#arquivo').prop('files')[0]);
}