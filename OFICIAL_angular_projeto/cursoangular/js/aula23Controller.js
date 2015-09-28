var app = angular.module('app', ['ui.unique', 'ui.validate']);

app.controller('Aula23Controller', function($scope){
    
    // ui.unique
    
    $scope.usuarios = [
        { nome : "Jaison", email : "atendimento@jaison.com.br" },
        { nome : "Jaison 2", email : "eu@jaison.com.br" },
        { nome : "Jaison", email : "msn@jaison.com.br" },
        { nome : "Jaison 2", email : "teste@jaison.com.br" },
        { nome : "Jaison", email : "atendimento@jaison.com.br" },
        { nome : "Jaison 3", email : "atendimento@jaison.com.br" },
    ];
    
    $scope.validar = function(valor){
        return valor === $scope.senha1;
    }
    
});