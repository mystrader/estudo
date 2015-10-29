function mueveReloj(){
// Obtém a data/hora atual
var data = new Date();

// Guarda cada pedaço em uma variável
var dia     = data.getDate();           // 1-31
var dia_sem = data.getDay();            // 0-6 (zero=domingo)
var mes     = data.getMonth();          // 0-11 (zero=janeiro)
var ano2    = data.getYear();           // 2 dígitos
var ano4    = data.getFullYear();       // 4 dígitos
var hora    = data.getHours();          // 0-23
var min     = data.getMinutes();        // 0-59
var mseg    = data.getMilliseconds();   // 0-999
var tz      = data.getTimezoneOffset(); // em minutos
	
	
//se precisar ...
//	var data = new Date();
//var dias = new Array(
// 'domingo','segunda','terça','quarta','quinta','sexta','sábado'
//);	

	
//colocando dois dígitos nos segundos	
var segundosdoisdigitos = ((data.getSeconds()+1)>=10)? (data.getSeconds()+1) : '0' + (data.getSeconds()+1); 	
	
//colocando dois dígitos nos minutos	
var minutosdoisdigitos = ((data.getMinutes()+1)>=10)? (data.getMinutes()+1) : '0' + (data.getMinutes()+1); 		
	

	
// Formata a data e a hora (note o mês + 1)
var str_data = dia + '/' + (mes+1) + '/' + ano4;
var str_hora = hora + ':' + minutosdoisdigitos + ':' + segundosdoisdigitos;

horaImprimible = str_data +" &nbsp;&nbsp; " + str_hora;
document.getElementById("hora").innerHTML = horaImprimible;
setTimeout("mueveReloj()",1000)
}