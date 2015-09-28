var app = angular.module('app', ['pascalprecht.translate']);

app.config(function($translateProvider){

    $translateProvider.translations('pt-br', {
        TITULO : "Seja bem vindo!",
        PARAGRAFO1 : "Essa é uma página de início!",
        BTN_OK : "Confirmar",
        BTN_CANCEL : "Cancelar",
        EN_BTN : "English",
        PTBR_BTN : "PT BR"
    });
    
    $translateProvider.translations('en', {
        TITULO : "Welcome",
        PARAGRAFO1 : "This is a Hello World Page!",
        BTN_OK : "Confirm",
        BTN_CANCEL : "Cancel",
        EN_BTN : "Inglês",
        PTBR_BTN : "Português"
    });
    
    $translateProvider.preferredLanguage('pt-br');
    
});

app.controller('Aula20Controller', function($scope, $translate){
    
    $scope.setaIdioma = function(sigla){
       $translate.use(sigla); 
    }
    
});