;(function () {
    describe("formLoginMessage directive", function () {

        var DISPLAY = false;
        var SEVERITY = 'info';
        var MESSAGE_TITLE = '';
        var MESSAGE_CONTENT = '';
        var EVENT_LOGIN_CONFIRMED = 'sec:loginConfirmed';
        var EVENT_NAME_LOGIN_FAILED = 'sec:loginFailed';
        var EVENT_NAME_2FA_REQUIRED = 'sec:2faRequired';
        var EVENT_NAME_2FA_FAILED = 'sec:2faFailed';
        var provider, $scope, elem;

        beforeEach(module('alv-ch-ng.security', function ($httpProvider, AuthenticationServiceProvider) {
            provider = AuthenticationServiceProvider;
        }));

        beforeEach(inject(function ($compile, $rootScope) {
            $scope = $rootScope;
            elem = angular.element('<div><form-login-message></form-login-message></div>');
            $scope.formLoginMessage = {};
            $compile(elem)($scope);
            $scope.$digest();
        }));


        it('shows the login form message on EVENT_NAME_LOGIN_CONFIRMED',
            function (done) {
                inject(function ($compile, $rootScope, $httpBackend, AuthenticationService) {
                    var user = {
                        userName: 'testUserName',
                        authToken: false
                    };

                    expect($scope.formLoginMessage.display).toEqual(DISPLAY);
                    expect($scope.formLoginMessage.severity).toEqual(SEVERITY);
                    expect($scope.formLoginMessage.messageTitle).toEqual(MESSAGE_TITLE);
                    expect($scope.formLoginMessage.messageContent).toEqual(MESSAGE_CONTENT);

                    $httpBackend.whenGET('/api/currentUser').respond(user);
                    AuthenticationService.login('testUserName', 'testUser');

                    $rootScope.$on(EVENT_LOGIN_CONFIRMED, function () {
                        elem = angular.element('<div><form-login-message></form-login-message></div>');
                        $compile(elem)($scope);

                        expect($scope.formLoginMessage.display).toBeTruthy();
                        expect($scope.formLoginMessage.severity).toEqual('success');
                        expect($scope.formLoginMessage.messageTitle).toEqual('Login');
                        expect($scope.formLoginMessage.messageContent).toEqual('Login successful.');
                        done();
                    });
                    $httpBackend.flush();
                });
            }
        );

        it('shows the login form message on EVENT_NAME_2FA_REQUIRED.',
            function (done) {
                inject(function ($compile, $rootScope, $httpBackend, AuthenticationService) {
                    var user = {
                        userName: 'testUserName',
                        authToken: true
                    };
                    $httpBackend.whenGET('/api/currentUser').respond(user);
                    AuthenticationService.login('testUserName', 'testUser');
                    $rootScope.$on(EVENT_NAME_2FA_REQUIRED, function () {
                        elem = angular.element('<div><form-login-message></form-login-message></div>');
                        $compile(elem)($scope);

                        expect($scope.formLoginMessage.display).toBeTruthy();
                        expect($scope.formLoginMessage.severity).toEqual('info');
                        expect($scope.formLoginMessage.messageTitle).toEqual('2FA Authentication');
                        expect($scope.formLoginMessage.messageContent).toEqual('2FA Verification required.');
                        done();
                    });
                    $httpBackend.flush();
                });
            }
        );

        it('shows the login form message on EVENT_NAME_2FA_FAILED.',
            function () {
                inject(function ($compile, $rootScope) {
                    $rootScope.$broadcast(EVENT_NAME_2FA_FAILED);

                    $rootScope.$on(EVENT_NAME_2FA_FAILED, function () {
                        elem = angular.element('<div><form-login-message></form-login-message></div>');
                        $compile(elem)($scope);

                        expect($scope.formLoginMessage.display).toBeTruthy();
                        expect($scope.formLoginMessage.severity).toEqual('danger');
                        expect($scope.formLoginMessage.messageTitle).toEqual('2FA Authentication');
                        expect($scope.formLoginMessage.messageContent).toEqual('2FA Verification failed.');
                    });
                });
            }
        );

        it('shows the login form message on EVENT_NAME_LOGIN_FAILED.',
            function (done) {
                inject(function ($compile, $rootScope, $httpBackend, AuthenticationService) {
                    $httpBackend.whenGET('/api/currentUser').respond(404, '');
                    AuthenticationService.login('testUserName', 'testUser');
                    $rootScope.$on(EVENT_NAME_LOGIN_FAILED, function () {
                        elem = angular.element('<div><form-login-message></form-login-message></div>');
                        $compile(elem)($scope);

                        expect($scope.formLoginMessage.display).toBeTruthy();
                        expect($scope.formLoginMessage.severity).toEqual('danger');
                        expect($scope.formLoginMessage.messageTitle).toEqual('Login');
                        expect($scope.formLoginMessage.messageContent).toEqual('Username and/or password are wrong.');
                        done();
                    });
                    $httpBackend.flush();
                });
            }
        );
    });

}());
