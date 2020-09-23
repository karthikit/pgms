!function(){
    "use strict";
        angular.module('styleApp', [])
        .controller('styleController', styleController);
        
        function styleController($scope) {
            $scope.counter=0;
            $scope.change = function(){
                $scope.counter++;
            };
        }
}();