app.controller('aula06Controller', function($scope){
    
    $scope.nome = "Curso AngularJS Devmedia";
    
    $scope.olaMundo = function(nome){
        
        alert("Olá " + nome + "!");
        
    }
    
    $scope.itemSelecionado = 1;
  
  $scope.items = [
    { id: 1, nome: 'usuario1', sobrenome:'sobrenome1' },
    { id: 1, nome: 'usuario2', sobrenome:'sobrenome2' }
  ];
    
    console.log("Executou o controller aula06Controller");
    
});