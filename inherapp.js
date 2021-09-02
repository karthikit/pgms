(function () {
    'use strict';
    
    angular.module('ControllerAsApp', [])
    .controller('ParentController1', ParentController1)
    .controller('ChildController1', ChildController1)
    .controller('ParentController2', ParentController2)
    .controller('ChildController2', ChildController2);
    
    ParentController1.$inject = ['$scope'];
    function ParentController1($scope) {
      $scope.parentValue = 1;
    }
    ChildController1.$inject = ['$scope'];
    function ChildController1($scope) {
      $scope.childValue = 2;
    }

    function ParentController2() {
      var parent = this;
      parent.value = 3;
    }
    function ChildController2() {
      var child = this;
      child.value = 4;
    }
    
    })();