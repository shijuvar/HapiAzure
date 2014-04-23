"use strict";
bookmarkApp.controller("BookmarksController", ["bookmarkService", "$scope", "$location","$route", function (bookmarkService, $scope, $location,$route) {
    $scope.bookmarks = [];

    var init = function () {
        bookmarkService.getAll().$promise.then(function (bookmarks) {
            $scope.bookmarks = bookmarks;
        });
        $scope.sortOrder = "-priority";
    };

    $scope.viewDetails = function (rowKey) {
        $location.url("/bookmarkDetails/" + rowKey);
    };
    $scope.goToEdit = function (rowKey) {
        $location.url("/bookmarks/Edit/" + rowKey);
    };

    $scope.deleteBookmark = function (rowKey) {
        bookmarkService.remove(rowKey).$promise
            .then(function(response){
              $route.reload();
            });
    };
    init();


} ]);