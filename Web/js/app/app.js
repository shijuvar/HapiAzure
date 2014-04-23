
window.bookmarkApp = angular.module("app", ["ngRoute", "ngResource", "ui.select2", "custom-utilities"])
.config(["$routeProvider", "$httpProvider", function ($routeProvider, $httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $httpProvider.defaults.useXDomain = true;

    $routeProvider
        .when("/bookmarks", { templateUrl: "partials/bookmarks.html", controller: "BookmarksController" })
         .when("/bookmarkdetails/:RowKey", { templateUrl: "partials/bookmark-detail.html", controller: "BookmarkController" })
         .when("/bookmarks/Edit/:RowKey", { templateUrl: "partials/bookmark-edit.html", controller: "BookmarkController" })
         .when("/bookmarks/Add", { templateUrl: "partials/bookmark-edit.html", controller: "BookmarkController" })
        .otherwise({ redirectTo: "/bookmarks" });

    $httpProvider.interceptors.push('httpInterceptor');
} ]);
 