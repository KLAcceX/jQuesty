const cursorDelay = 500;

const panel = {
	clear : function(){
  	$('#panel').text('');
  },
  type : function(message, index, interval){
  	if (index < message.length) {
      $('#panelTxt').append(message[index++]);
      setTimeout(function () { panel.type(message, index, interval); }, interval);
    }
  }
};

function typeText(message){
	panel.type(message, 0, 50);
}

$(function(){ //start gomes
	typeText('Alalalalal');
  $("#panelIpt").focus();
});


window.setInterval(function () {
    if ($('#iptCursor').css('visibility') === 'visible') {
        $('#iptCursor').css({
            visibility: 'hidden'
        });
    } else {
        $('#iptCursor').css({
            visibility: 'visible'
        });
    }
}, cursorDelay);

$(document).keypress(function(e) {
  if (e.which === 13) {
    e.preventDefault();
    console.log($('#panelIpt').text());
    //$("#iptCursor").remove();
    $("#panelIpt").append('<div id="cursor"></div>');
    $("#panelIpt").focus();
  }
});