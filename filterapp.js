(function () {
  'use strict';
    
    angular.module('filApp', [])
    .controller('filController', filController)
    .filter('likes',LikesFilter)
    .filter('likesall',LikesAllFilter);

    filController.$inject = ['$scope', 'likesFilter'];
    function filController($scope,likesFilter) {

      $scope.sayMessage = function () {
        var msg="I do custom filter";
        return msg;
      };
      $scope.sayLikesMessage = function () {
        var msg="I do custom filter";
        msg = likesFilter(msg);
        return msg;
      };
    }
    function LikesFilter(){
      return function (input) {
        input = input || "";
        input = input.replace("do","like");
        return input;
      };
    }
    function LikesAllFilter(){
      return function (input,target,replace) {
        input = input || "";
        input = input.replace(target,replace);
        return input;
      };
    }
    })();