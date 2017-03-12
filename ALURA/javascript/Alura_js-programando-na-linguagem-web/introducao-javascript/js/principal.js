// principal.js

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

// selecionando a coluna do IMC
var tdImc = paciente.querySelector(".info-imc");




if (peso < 0 ){
    console.log("peso inválido")
}



var imc = peso / (altura * altura);

tdImc.textContent = imc;