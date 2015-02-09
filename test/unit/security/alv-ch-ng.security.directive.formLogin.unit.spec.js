;(function() {
    describe("formLogin directive", function() {

        var $scope, elem, provider;

        beforeEach(module('alv-ch-ng.security', function($httpProvider, AuthenticationServiceProvider) {
            provider = AuthenticationServiceProvider;
        }));

        beforeEach(inject(function($compile, $rootScope) {
            $scope = $rootScope;
            elem = angular.element('<div><form-login></form-login></div>');
            $compile(elem)($scope);
            $scope.$digest();
        }));

        it('shows the login form.',
            function() {
                inject(function () {
                    expect(elem.find('#loginUser')).toBeTruthy();
                    expect(elem.find('#loginPwd')).toBeTruthy();
                    expect(elem.find('.btn-primary')).toBeTruthy();
                });
            }
        );

        it('shows the login form and fires a login.',
            function() {
                inject(function ($compile, $rootScope, $httpBackend) {
                    var user = {
                        userName: 'testUserName',
                        roles: ['ROLE_TEST'],
                        authToken: false
                    };
                    $httpBackend.whenGET('/api/currentUser').respond(user);

                    expect(elem.find('#loginUser')).toBeTruthy();
                    expect(elem.find('#loginPwd')).toBeTruthy();
                    expect(elem.find('.btn-primary')).toBeTruthy();

                    $scope.login();
                });
            }
        );

        describe('with default user', function() {

            var user = {
                userName: 'testUserName',
                roles: ['ROLE_TEST'],
                authToken: false
            };

            beforeEach(inject(function($compile, $rootScope, $httpBackend) {
                $httpBackend.whenGET('/api/currentUser').respond(user);

                $scope = $rootScope;
                elem = angular.element('<div><form-login></form-login></div>');
                $compile(elem)($scope);
                $scope.$digest();

                $scope.login();
            }));

            it('hides the login form after succesful login.',
                function(done) {
                    inject(function ($compile, $rootScope, $httpBackend) {
                        elem = angular.element('<div><form-login></form-login></div>');
                        $compile(elem)($scope);
                        $scope.$digest();

                        $rootScope.$on('sec:loginConfirmed', function() {
                            expect(elem.find('form.ng-hide')).toBeTruthy();
                            done();
                        });
                        $httpBackend.flush();
                    });
                }
            );
        });

        describe('2fa required auth user', function() {

            var user = {
                userName: 'testUserName',
                roles: ['ROLE_TEST'],
                authToken: true
            };

            it('shows the auth input after clicking login.',
                function(done) {
                    inject(function ($compile, $rootScope, $httpBackend) {
                        $httpBackend.whenGET('/api/currentUser').respond(user);

                        var $scope = $rootScope.$new();
                        var elem = angular.element('<div><form-login></form-login></div>');
                        $compile(elem)($scope);
                        $scope.$digest();

                        $scope.login();

                        $rootScope.$on('sec:2faRequired', function() {
                            elem = angular.element('<div><form-login></form-login></div>');
                            $compile(elem)($scope);

                            expect($scope.authTokenShow).toBeTruthy();
                            done();
                        });
                        $httpBackend.flush();
                    });
                }
            );
        });

    });

}());
