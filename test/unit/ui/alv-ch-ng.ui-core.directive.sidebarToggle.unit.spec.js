;(function () {
    describe('sidebarToggle directive', function () {
        var elem, scope;

        beforeEach(module('alv-ch-ng.ui-core'));

        beforeEach(inject(function ($rootScope, $compile) {
            scope = $rootScope;
            elem = angular.element('<div><div class="navbar-header"><sidebar-toggle></sidebar-toggle></div><div id="container"><div class="sidebar" id="sidebar">sidebar</div><div class="content">content</div></div></div>');
            $compile(elem)(scope);
            scope.$digest();
        }));

        it('renders the element as required.', function () {
            expect(elem.children('.sidebar')).toBeTruthy();
            expect(elem.children('.navbar-header').children('.sidebar-toggle')).toBeTruthy();
            //expect(elem.children('.sidebar-toggle').hasClass('ng-show')).toBeTruthy();
            //expect(elem.children('.sidebar-toggle').hasClass('ng-hide')).toBeFalsy();

            elem.find('#sidebar').removeClass('sidebar');
            scope.$digest();

            scope.$broadcast('$routeChangeSuccess');
            scope.$digest();

            expect(elem.children('.sidebar-toggle.ng-hide')).toBeTruthy();
        });

        it('renders the element as required but without sidebar.',
            function() {
                inject(function ($compile) {
                    elem = angular.element('<div><div class="navbar-header"><sidebar-toggle></sidebar-toggle></div><div id="container"><div class="content">content</div></div></div>');
                    $compile(elem)(scope);
                    scope.$digest();

                    //console.log($document.find('.sidebar').length);
                    expect(elem.children('.navbar-header').children('.sidebar-toggle')).toBeTruthy();
                    expect(elem.children('.sidebar-toggle.ng-hide')).toBeTruthy();
                });
            }
        );
    });
}());