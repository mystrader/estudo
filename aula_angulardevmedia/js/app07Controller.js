app.controller("aula07Controller", function($scope){
         $scope.nomes = [ 'jaison', 'Daniel', 'tiago', 'fernando' ];

        $scope.pessoas = [];
        $scope.pessoas.push(
            { nome: "marcus henrique", idade: 31, status: false }            	
          );
        $scope.pessoas.push(
            { nome: "Paulo", idade: 31, status: false }            	
          );
        $scope.pessoas.push(
            { nome: "marcus henrique", idade: 31, status: false }            	
          );
        $scope.pessoas.push(
            { nome: "Thiago", idade: 31, status: false }            	
          );
        $scope.pessoas.push(
            { nome: "Mateus", idade: 31, status: false }            	
          );
        $scope.pessoas.push(
            { nome: "João", idade: 31, status: false }            	
          );
        $scope.pessoas.push(
            { nome: "Pedro", idade: 31, status: false }            	
          );
        console.log($scope.pessoas);



			$scope.adicionaPessoa = function(){
				var nome = document.getElementById("nomepessoa");
				var idade = document.getElementById("idadepessoa");

				$scope.pessoas.push({
					nome: nome.value, idade : idade.value
				});

				nome.value = "";
				idade.value = "";
			}

});
