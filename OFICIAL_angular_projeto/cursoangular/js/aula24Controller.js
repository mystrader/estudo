function onGoogleReady(){
    angular.bootstrap(document.getElementsByTagName('body')[0], ['app']);
}

angular.module('app', ['uiGmapgoogle-maps'])
    .controller('Aula24Controller', function($scope){
        
        $scope.map = { center : { latitude : 45, longitude : -73 }, zoom : 10 };
    
        $scope.marker = {
            id : 0,
            coords : {
                latitude : 45,
                longitude : -73
            }
        }
    
    });