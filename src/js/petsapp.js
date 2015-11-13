/**
 * Created by krio on 10.11.15.
 */
var petsApp = angular.module('petsApp', []);
petsApp.controller('PetsListCtrl', ['$scope', '$http', function($scope, $http){
    $scope.limit = 10;
    $scope.loadMore = function(){
        $scope.limit += 10;
    };
    $http.get('www/json/pets.json').success(function(data){
        $scope.pets = data;
    })
}]);