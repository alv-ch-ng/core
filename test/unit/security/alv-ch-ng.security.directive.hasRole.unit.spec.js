;(function() {
    describe("has-role directive", function() {

        beforeEach(module('alv-ch-ng.security', function() {}));

        it('hides an element if the user doesn\'t own the required role.',
            function() {
                inject(function ($compile, $rootScope) {
                    $rootScope.user = mockUser;
                    var scope = $rootScope.$new();
                    // get an element representation
                    var elem = angular.element('<span has-role="test"></span>');
                    // finally compile the HTML
                    $compile(elem)(scope);
                    expect(elem.hasClass('ng-hide')).toBeTruthy();
                });
            }

        );

        it('shows an element if the user owns the required role.',
            inject(function ($compile, $rootScope) {
                $rootScope.user = mockUser;
                var scope = $rootScope.$new();
                // get an element representation
                var elem = angular.element('<span has-role="ROLE_TEST"></span>');
                // finally compile the HTML
                $compile(elem)(scope);
                expect(elem.hasClass('ng-hide')).toBeFalsy();
            })
        );

        it('shows an element if no role to own is indicated.',
            inject(function ($compile, $rootScope) {
                $rootScope.user = mockUser;
                var scope = $rootScope.$new();
                // get an element representation
                var elem = angular.element('<span has-role></span>');
                // finally compile the HTML
                $compile(elem)(scope);
                expect(elem.hasClass('ng-hide')).toBeFalsy();
            })
        );

        it('shows elements after login if the role is given.',
            inject(function ($compile, $rootScope, $httpBackend, SecurityService) {
                $httpBackend.whenGET('/api/currentUser').respond(mockUser);
                var scope = $rootScope.$new();
                // get an element representation
                var elem = angular.element('<span has-role="ROLE_TEST"></span>');
                var elem2 = angular.element('<span has-role="ROLE"></span>');
                // finally compile the HTML
                $compile(elem)(scope);
                $compile(elem2)(scope);
                expect(elem.hasClass('ng-hide')).toBeTruthy();
                expect(elem2.hasClass('ng-hide')).toBeTruthy();
                SecurityService.login();
                $httpBackend.flush();
                expect(elem.hasClass('ng-hide')).toBeFalsy();
                expect(elem2.hasClass('ng-hide')).toBeTruthy();
            })
        );

        it('hides an element after logout if a role has to be given.',
            inject(function ($compile, $rootScope, SecurityService) {
                $rootScope.user = mockUser;
                var scope = $rootScope.$new();
                // get an element representation
                var elem = angular.element('<span has-role="ROLE_TEST"></span>');
                var elem2 = angular.element('<span has-role="!ROLE_TEST"></span>');
                // finally compile the HTML
                $compile(elem)(scope);
                $compile(elem2)(scope);
                SecurityService.logout();
                expect(elem.hasClass('ng-hide')).toBeTruthy();
                expect(elem2.hasClass('ng-hide')).toBeFalsy();
            })
        );


    });

}());
