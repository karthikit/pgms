!function(){
    "use strict";
        angular.module('eventApp', [])
        .controller('eventController', eventController);
        
        function eventController($scope) {
          $scope.c = 0;
          $scope.mm=0;
          $scope.mo=0;
          $scope.ml=0;
          $scope.md=0;
          $scope.mu=0;
          $scope.kp1=0;
          $scope.kp2=50;
        }
}();