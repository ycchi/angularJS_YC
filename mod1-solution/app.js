(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
    $scope.lunchItems = "";
    $scope.result = "";
    $scope.checkAmount = function () {
        console.log($scope.lunchItems)

        // check if too much
        var itemsArr = $scope.lunchItems.split(",")
        console.log(itemsArr)

        if (itemsArr.length == 1 && itemsArr[0] == "") {
            $scope.result = "Please enter data first!";
        } else if (itemsArr.length <= 3 && itemsArr.length > 0) {
            $scope.result = "Enjoy!";
        } else {
            $scope.result = "Too much!";
        }

    }
}

}) ();