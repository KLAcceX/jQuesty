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
});