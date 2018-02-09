const BACKGROUND = {
  CursorDelay : 200,
  MensagemIntervalo : 50,
  Intervalo : function() {
    setInterval(function () {
      if ($('#iptCursor').css('visibility') === 'visible') {
          $('#iptCursor').css({ visibility: 'hidden' });
      } else {
          $('#iptCursor').css({ visibility: 'visible' });
      }
    }, BACKGROUND.CursorDelay);
  },
  LimparIntervalo : function() {
    $('#iptCursor').css({ visibility: 'hidden' });
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

$(function(){
  $("#painelIpt").focus();
  PAINEL.DigitarTexto("ASDASAAAAAAASPOIQUWELJQWLKJE");
});

$(document).keypress(function(e) {
  if (e.which === 13) {
    BACKGROUND.MensagemIntervalo = 0;
    e.preventDefault();
    PAINEL.DigitarTexto("AOOOOOOOOOOOOOOOOOOOOOOOOOOOOO");
    $("#painelIpt").focus();
  }
});