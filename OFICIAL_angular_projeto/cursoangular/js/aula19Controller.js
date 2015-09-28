var app = angular.module('app', ['ngCookies']);

app.controller('Aula19Controller', function($scope, $cookieStore){
    
    $scope.criarCookie = function(){
        $cookieStore.put("meusDados", 
                         { "nome" : "Jaison Schmidt", "idade" : 31 }
                        );
    }
    
    $scope.getValorCookie = function(){
        console.log($cookieStore.get("meusDados"));
    }
    
    $scope.removeCookie = function(){
        $cookieStore.remove("meusDados");
    }
    
});

app.controller('Aula19_2Controller', function($scope, $cookieStore){
    
    $scope.getValorCookieCtrl2 = function(){
        console.log($cookieStore.get("meusDados"));
    }
    
});