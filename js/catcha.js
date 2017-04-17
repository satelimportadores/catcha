$(document).ready(function() {
	$("#alerta").hide();
	var aleatorio = Math.round(Math.random()*1000);
	$('#catcha01').val(aleatorio);

	$( "#catcha02" ).blur(function() {
  		catchaval = $("#catcha02").val();
	  		if (catchaval != aleatorio) {
	  			$("#alerta").show();
	  			$( "#catcha02" ).focus();
	  		}else{
	  			$("#alerta").hide();
	  		}
	});
});
