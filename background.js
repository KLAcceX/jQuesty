var prosseguir;

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
  },
  Digitar : function(mensagem, index){ //só será usado em casos muito específicos |-| mudança futura ??
    if (index < mensagem.length) {
      $('#painelTxt').append(mensagem[index++]);
      setTimeout(function () { PAINEL.Digitar(mensagem, index); }, BACKGROUND.MensagemIntervalo);
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
      prosseguir($('#painelIpt').text());
    }
    e.preventDefault();
    BACKGROUND.MensagemIntervalo = 0;
  }
  if($('#painelIpt').width() + 10 > $('#painel').width() && e.which !== 0 && e.keyCode !== 0 &&
        e.which !== 8 && e.keyCode !== 13 && !e.ctrlKey && !e.metaKey && !e.altKey && !e.shiftKey){
    e.preventDefault();
  }
});

$(document).bind('mousedown',function(e)
{
    e.preventDefault();
});