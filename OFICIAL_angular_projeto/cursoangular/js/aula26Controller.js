var app = angular.module('app', ['ui.bootstrap']);

app.controller('Aula26Controller', function($scope){
   
    $scope.accor = { heading:"", content:""};
    
    $scope.addAccordion = function(){
        $scope.grupos.push($scope.accor);
        $scope.accor = { heading:"", content:""};
    }
    
    $scope.grupos = [
        { heading:"Conteudo dinâmico", content:"Conteúdo do group dinâmico" },
        { heading:"Conteudo dinâmico", content:"Conteúdo do group dinâmico" },
        { heading:"Conteudo dinâmico", content:"Conteúdo do group dinâmico" },
        { heading:"Conteudo dinâmico", content:"Conteúdo do group dinâmico" },
        { heading:"Conteudo dinâmico", content:"Conteúdo do group dinâmico" }
    ];
    
});