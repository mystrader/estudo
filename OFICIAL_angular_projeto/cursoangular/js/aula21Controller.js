var app = angular.module('app', ['angularFileUpload']);

app.controller('Aula21Controller', function($scope, FileUploader){
    
    var uploader = $scope.uploader = new FileUploader({
        url : 'service/upload.php'
    });
    
    uploader.filters.push({
        name : "tamanhoFila",
        fn : function(item, options){
            return this.queue.length < 4;
        }
    });
    
    uploader.onSuccessItem = function(fileItem){
        console.log("Item enviado com sucesso!");
        fileItem.remove();
    };
    
    uploader.onWhenAddingFileFailed = function(fileItem){
        console.info("Erro ao adicionar elemento", fileItem);
    };
    
});