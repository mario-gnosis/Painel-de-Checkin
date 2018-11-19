

$(document).ready(function() {
$("#mais").click(function(){
 
if($("#mudeValor").val() < 9){
$('#mudeValor').val(parseInt($('#mudeValor').val())+1); return false;
} else {
$('#limite').html('Não é possível selecionar mais do que 9 passageiros.');
return false;
}
 
});
$("#menos").click(function(){
$('#limite').html('');
if($("#mudeValor").val()!=0){$('#mudeValor').val(parseInt($('#mudeValor').val())-1);} return false;
});
});
