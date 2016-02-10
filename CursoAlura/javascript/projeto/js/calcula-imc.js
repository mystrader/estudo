// peso / altura * altura


// var tdAltura = document.getElementById('altura-2');
// var tdPeso = document.getElementById('peso-2');

// var peso2 = tdPeso.textContent;
// var Altura2 = tdAltura.textContent;

// var paciente2 = {peso : peso2, altura : Altura2 };



// var tdAltura = document.getElementById('altura-1');
// var tdPeso = document.getElementById('peso-1');

// var peso1 = tdPeso.textContent;
// var Altura1 = tdAltura.textContent;

// var paciente1 = {peso : peso1, altura: Altura1 };
// var pacientes = [paciente1 , paciente2];


var trsPacientes = document.getElementsByClassName('paciente'); //Array de trs

var posicaoAtual = 0;
while(posicaoAtual <= trsPacientes.length - 1){

	var pacienteTr = trsPacientes[posicaoAtual];

	var tdNome   =  pacienteTr.getElementsByClassName('info-nome')[0];
	var tdPeso   =  pacienteTr.getElementsByClassName('info-peso')[0];
	var tdaltura =  pacienteTr.getElementsByClassName('info-altura')[0];


	var paciente = {nome: tdNome.textContent, peso: tdPeso.textContent, altura: tdaltura.textContent};


	if(paciente.altura != 0){

		var imc = paciente.peso / (paciente.altura * paciente.altura);

		var tdImc = pacienteTr.getElementsByClassName('info-imc')[0];
		tdImc.textContent = imc;

		console.log(imc);

		}else{
			console.log("não executei porque altura é igual a 0 e não posso dividir por zero");
		}

		posicaoAtual++
	
}
