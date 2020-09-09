!function(){
    "use strict";
    var shopList= ["Biscuit","Cookies","Cake","Bread"];
    
    var shopListDetails= [ 
        { name:"Biscuit", price:15},
        { name:"Cookies", price:70},
        { name:"Cake", price:25},
        { name:"Bread", price:35},
    ];    
    
    angular.module('repApp', [])
    .controller('repController', repController);
        
    repController.$inject = ['$scope'];
    function repController($scope) {
        $scope.shopList = shopList;
        $scope.shopListDetails = shopListDetails;
        $scope.addToTable = function(){
            var newItem = {
                name: $scope.newItemName,
                price: $scope.newItemPrice
            };
            $scope.shopListDetails.push(newItem);
        };
    }
}();