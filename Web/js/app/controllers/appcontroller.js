"use strict";
bookmarkApp.controller("AppController", ["$location", "$scope", "bookmarkService", function ($location, $scope, bookmarkService) {

    $scope.goToAdd = function () {
        $location.url("/bookmarks/Add/");
    };
    $scope.viewList = function () {
        $location.url("/bookmarks");
    };
  

} ])