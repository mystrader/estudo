app.factory('Pessoa', function () {
	
	console.log("criou o objeto Pessoa");

	var Pessoa = function() {
		console.log("Instanciou");
		this.nome = "Jaison";
		this.idade = "31";
	

		this.cumprimentar = function (){
			return "Olá" + this.nome + "!";
		};
	};
	return Pessoa;
});

