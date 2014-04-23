window.utilities = angular.module("custom-utilities", [])
.directive("confirmModal", [function () {
    return {
        restrict: "A",
        scope: {
            approve: '&onApprove',
            deny: '&onDeny',
            closable: '=closable',
            id: '@modalId',
            title: '@title',
            message: '@message'
        },
        templateUrl: "partials/confirm-modal.html",
        link: function (scope, element, attrs, ngModelCtrl) {

            scope.closeModal = function () {
                $('.ui.modal').modal('hide');
            };

            element.on('click', function (e) {
                $('#' + scope.id).modal('show');
            });
        }
    };
} ]);