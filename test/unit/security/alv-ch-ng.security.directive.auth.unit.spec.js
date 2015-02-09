;(function() {
    describe("auth directive", function() {

        beforeEach(module('alv-ch-ng.security', function() {}));

        it('hides the element if the user is not authenticated.',
            function() {
                inject(function ($compile, $rootScope) {
                    var scope = $rootScope.$new();
                    // get an element representation
                    var elem = angular.element('<span auth></span>');
                    // finally compile the HTML
                    $compile(elem)(scope);
                    expect(elem.hasClass('ng-hide')).toBeTruthy();
                });
            }
        );

        it('shows the element if a login occurs.',
            function() {
                inject(function ($compile, $rootScope, $httpBackend, SecurityService) {
                    $httpBackend.whenGET('/api/currentUser').respond(mockUser);
                    var scope = $rootScope.$new();
                    // get an element representation
                    var elem = angular.element('<span auth></span>');
                    // finally compile the HTML
                    $compile(elem)(scope);
                    expect(elem.hasClass('ng-hide')).toBeTruthy();
                    SecurityService.login('test', 'test');
                    $httpBackend.flush();
                    expect(elem.hasClass('ng-hide')).toBeFalsy();
                });
            }
        );

        it('shows the element if the user is authenticated.',
            function() {
                inject(function ($compile, $rootScope) {
                    $rootScope.user = mockUser;
                    var scope = $rootScope.$new();
                    // get an element representation
                    var elem = angular.element('<span auth></span>');
                    // finally compile the HTML
                    $compile(elem)(scope);
                    expect(elem.hasClass('ng-hide')).toBeFalsy();
                });
            }
        );

        it('hides the element if a logout occurs.',
            function() {
                inject(function ($compile, $rootScope, $httpBackend, SecurityService) {
                    $httpBackend.whenGET('/api/currentUser').respond(mockUser);
                    var scope = $rootScope.$new();
                    SecurityService.login('test', 'test');
                    $httpBackend.flush();
                    // get an element representation
                    var elem = angular.element('<span auth></span>');
                    // finally compile the HTML
                    $compile(elem)(scope);
                    expect(elem.hasClass('ng-hide')).toBeFalsy();
                    SecurityService.logout();
                    expect(elem.hasClass('ng-hide')).toBeTruthy();
                });
            }
        );

    });

}());
