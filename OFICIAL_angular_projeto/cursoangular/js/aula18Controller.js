app.controller('Aula18Controller', function($scope, $location){
    
    $scope.$location = $location;
    
    $scope.setaId = function(p_id){
        console.log("entrou");
        $location.search({ id : p_id });
    }
    
    $scope.$watch('$location.search().id', function(id){
        console.log("Mudou o valor do ID para "+id);
    });
    
    
}).config(function($locationProvider){
    $locationProvider.html5Mode({
        enabled : true,
        requireBase : false
    }).hashPrefix('#');
});