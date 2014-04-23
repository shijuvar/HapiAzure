"use strict";
bookmarkApp.controller("BookmarkController", ["$scope", "$routeParams", "$location", "bookmarkService", function ($scope, $routeParams, $location, bookmarkService) {

    init();

    function priorityValues() {
        var priorities = [];
        for (var i = 1; i <= 5; i++) {
            priorities.push({ priority: i });
        }

        return priorities;
    }



    $scope.saveBookmark = function (bookmark) {
        if ($routeParams.RowKey) {
            bookmarkService.update(bookmark).$promise.then(function (bookmark) {
                $location.url("/bookmarks");
            });
        }
        else {
            if (bookmark) {
                bookmarkService.addNew(bookmark).$promise.then(function (bookmark) {
                    $location.url("/bookmarks");
                }); 
            }

        }

    };

    $scope.cancel = function () {
        $location.url("/bookmarks");
    };

    function init() {

        if ($routeParams.RowKey) {
            bookmarkService.getByKey($routeParams.RowKey).$promise.then(function (result) {
                $scope.bookmark = result;
                $scope.vals = priorityValues();
            });
        }
        else {
            $scope.vals = priorityValues();
        }
    }

} ]);