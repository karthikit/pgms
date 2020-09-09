!function(){
    "use strict";
    var shopList= ["Biscuit","Cookies","Ice Cake","Pudding Cake","Wheat Bread","Milk Bread"];    
    
    var shopListDetails= [ 
        { name:"Biscuit", price:15, quan:23},
        { name:"Cookies", price:70, quan:150},
        { name:"Cake", price:15, quan:42},
        { name:"Bread", price:35, quan: 79},
    ];

    angular.module('repApp', [])
    .controller('repController', repController);
        
    repController.$inject = ['$scope'];
    function repController($scope) {
        $scope.shopList = shopList;
        $scope.shopListDetails = shopListDetails;
    }
}();