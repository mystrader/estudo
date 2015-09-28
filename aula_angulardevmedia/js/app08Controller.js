app.controller("aula08Controller", function($scope){


$scope.estados = ['RS', 'BA', 'RJ', 'SC']

$scope.pessoa = novaPessoa();
 $scope.pessoas = [];

 $scope.salvarPessoa = function(pessoa){
    $scope.pessoas.push(pessoa);
    $scope.pessoa = novaPessoa();

    // não funcionou :(
    $scope.frm.$setUntouched();
    $scope.frm.$setPristine();
 }



});


function novaPessoa(){
  return{
    nome: "",
    email:"",
    sexo: "f",
    estado: "RJ"
  }
}




