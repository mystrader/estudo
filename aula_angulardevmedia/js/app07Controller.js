app.controller("aula07Controller", function($scope){
         $scope.nomes = [ 'jaison', 'Daniel', 'tiago', 'fernando' ];

        $scope.pessoas = [];
        $scope.pessoas.push(
            { nome: "marcus henrique"}
          );

               console.log($scope.pessoas);
});
