app.controller('aula09Ctrl1Controller', ['$scope', 'operacoes', 'Pessoa', function ($scope, operacoes, Pessoa) {

    $scope.pessoa = new Pessoa();
    console.log("Entrou no controller aula 09-1 ");
    console.log(operacoes.somar(10, 10));
}]);


app.controller('aula09Ctrl2Controller', ['$scope', 'operacoes', function ($scope, operacoes) {
    console.log("Entrou no controller aula 09-2 ");
    console.log(operacoes.subtrair(10, 5));
}]);