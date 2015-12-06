angular.module('alurapic').controller('FotosController', function($scope, $http){
 
 		$scope.fotos = [];
 		
 		$http.get('v1/fotos')
 		.success(function(fotos){
 			$scope.fotos = fotos;
 		})
	 	.error(function(erro){
	 		cnosole.log(erro);
 		})

	// $scope.fotos = [];
	// var promisse = $http.get('v1/fotos');
	// promise.then(function(retorno){
	// 	$cope.fotos = retorno.data; //este nome retorno podia ser qualquer um
	// }).catch(function(error){
	// 	console.log(error);
	// });


});