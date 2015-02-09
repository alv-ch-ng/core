;(function() {
    describe("AuthenticationService", function() {

        var user = {
            userName: 'testUserName',
            roles: ['ROLE_TEST'],
            authToken: false
        };

        var EVENT_LOGIN_CONFIRMED = 'sec:loginConfirmed';
        var EVENT_LOGIN_FAILED = 'sec:loginFailed';
        var EVENT_LOGOUT = 'sec:logout';

        describe('with default values', function() {

            var provider;

            beforeEach(module('alv-ch-ng.security', function($httpProvider, AuthenticationServiceProvider) {
                provider = AuthenticationServiceProvider;
            }));

            it('provides a constant "EVENT_NAME_LOGIN" with default value "sec:login".', inject(function(AuthenticationService) {
                expect(AuthenticationService.getConstants().EVENT_NAME_LOGIN).toBe("sec:login");
            }));
            it('provides a constant "EVENT_NAME_LOGIN_REQUIRED" with default value "sec:loginRequired".', inject(function(AuthenticationService) {
                expect(AuthenticationService.getConstants().EVENT_NAME_LOGIN_REQUIRED).toBe("sec:loginRequired");
            }));
            it('provides a constant "EVENT_NAME_LOGIN_FAILED" with value default "sec:loginFailed".', inject(function(AuthenticationService) {
                expect(AuthenticationService.getConstants().EVENT_NAME_LOGIN_FAILED).toBe("sec:loginFailed");
            }));
            it('provides a constant "EVENT_NAME_LOGIN_REQUEST" with value default "sec:loginRequest".', inject(function(AuthenticationService) {
                expect(AuthenticationService.getConstants().EVENT_NAME_LOGIN_REQUEST).toBe("sec:loginRequest");
            }));
            it('provides a constant "EVENT_NAME_LOGIN_CONFIRMED" with value default "sec:loginConfirmed".', inject(function(AuthenticationService) {
                expect(AuthenticationService.getConstants().EVENT_NAME_LOGIN_CONFIRMED).toBe("sec:loginConfirmed");
            }));
            it('provides a constant "EVENT_NAME_LOGOUT" with value default "sec:logout".', inject(function(AuthenticationService) {
                expect(AuthenticationService.getConstants().EVENT_NAME_LOGOUT).toBe("sec:logout");
            }));
            it('provides a constant "EVENT_NAME_2FA_REQUIRED" with default value "sec:2faRequired".', inject(function(AuthenticationService) {
                expect(AuthenticationService.getConstants().EVENT_NAME_2FA_REQUIRED).toBe("sec:2faRequired");
            }));

            it('returns false if no login has happened.', inject(function(AuthenticationService) {
                expect(AuthenticationService.isAuthenticated()).toBeFalsy();
            }));

            it('puts the user object on $rootScope and triggers a ' + EVENT_LOGIN_CONFIRMED + ' event on login success.', function(done) {
                inject(function($rootScope, $httpBackend, AuthenticationService) {
                    $httpBackend.whenGET('/api/currentUser').respond(user);
                    AuthenticationService.login('testUserName', 'testUser');
                    $rootScope.$on(EVENT_LOGIN_CONFIRMED, function() {
                        expect($rootScope.user.userName).toEqual('testUserName');
                        expect(AuthenticationService.isAuthenticated()).toBeTruthy();
                        done();
                    });
                    $httpBackend.flush();
                });
            });

            it('provides methods to check, if the current user is authenticated and to grab the current user.', function(done) {
                inject(function($rootScope, $httpBackend, AuthenticationService) {
                    $httpBackend.whenGET('/api/currentUser').respond(user);
                    AuthenticationService.login('testUserName', 'testUser');
                    $rootScope.$on(EVENT_LOGIN_CONFIRMED, function() {
                        expect(AuthenticationService.isAuthenticated()).toBeTruthy();
                        expect(AuthenticationService.getCurrentUser()).toEqual(user);
                        done();
                    });
                    $httpBackend.flush();
                });
            });

            it('triggers a ' + EVENT_LOGIN_FAILED + ' event on login fail.', function(done) {
                inject(function($rootScope, $httpBackend, AuthenticationService) {
                    $httpBackend.whenGET('/api/currentUser').respond(404, '');
                    AuthenticationService.login('testUserName', 'testUser');

                    $rootScope.$on(EVENT_LOGIN_FAILED, function() {
                        expect($rootScope.user).toBeNull();
                        done();
                    });
                    $httpBackend.flush();
                });
            });

            it('sets the user object on $rootScope to null and triggers a ' + EVENT_LOGOUT + ' event on logout.', function(done) {
                inject(function($rootScope, AuthenticationService) {
                    $rootScope.user = { userName: 'testUserName' };
                    $rootScope.$on(EVENT_LOGOUT, function() {
                        expect($rootScope.user).toBeNull();
                        done();
                    });
                    AuthenticationService.logout();
                });
            });

            it('checks input values on setter calls.', function() {
                expect(function() {
                    provider.setConstants();
                }).toThrow(new Error('constants must not be empty.'));
                expect(function() {
                    provider.setAuthenticatorName();
                }).toThrow(new Error('authenticatorName must not be empty.'));
                expect(function() {
                    provider.setAuthenticatorName('unknown');
                }).toThrow(new Error('No authenticator with name \'unknown\' registered.'));
                expect(function() {
                    provider.addAuthenticator();
                }).toThrow(new Error('name must not be empty.'));
                expect(function() {
                    provider.addAuthenticator('defaultAuthenticator');
                }).toThrow(new Error('name must not be equal to \'defaultAuthenticator\'.'));
                expect(function() {
                    provider.addAuthenticator('customAuthenticator');
                }).toThrow(new Error('authenticator must not be empty.'));
                expect(function() {
                    provider.addAuthenticator('customAuthenticator', 'test');
                }).toThrow(new Error('authenticator.authenticate must be a function.'));
                expect(function() {
                    provider.setAuthenticatorOptionsFor();
                }).toThrow(new Error('name must not be empty.'));
                expect(function() {
                    provider.setAuthenticatorOptionsFor('unknown');
                }).toThrow(new Error('Could not configure unknown authenticator \'unknown\'.'));
                expect(function() {
                    provider.setAuthenticatorOptionsFor('defaultAuthenticator');
                }).toThrow(new Error('config must not be empty.'));
            });

        });

        describe('with custom values', function() {

            beforeEach(module('alv-ch-ng.security', function($httpProvider, AuthenticationServiceProvider) {
                AuthenticationServiceProvider.setConstants({EVENT_NAME_LOGIN: 'custom:login'});

                AuthenticationServiceProvider.addAuthenticator('customAuthenticator', {
                   authenticate: function(username, password, options) {
                       return options.name;
                   }
                });
                AuthenticationServiceProvider.setAuthenticatorName('customAuthenticator');
                AuthenticationServiceProvider.setAuthenticatorOptionsFor('customAuthenticator', { name: 'customAuthenticator' });
            }));

            it('reflects the custom constants that are set.', inject(function(AuthenticationService) {
                expect(AuthenticationService.getConstants().EVENT_NAME_LOGIN).toBe("custom:login");
            }));
        });

        describe('2fa required auth', function() {
            var provider;
            var user = {
                userName: 'testUserName',
                roles: ['ROLE_TEST'],
                authToken: true
            };

            var EVENT_NAME_2FA_REQUIRED = 'sec:2faRequired';

            beforeEach(module('alv-ch-ng.security', function($httpProvider, AuthenticationServiceProvider) {
                provider = AuthenticationServiceProvider;
            }));

            it('puts the user object on $rootScope and triggers a ' + EVENT_NAME_2FA_REQUIRED + ' event on login to require a 2fa authentication.', function(done) {
                inject(function($rootScope, $httpBackend, AuthenticationService) {
                    $httpBackend.whenGET('/api/currentUser').respond(user);
                    AuthenticationService.login('testUserName', 'testUser');
                    $rootScope.$on(EVENT_NAME_2FA_REQUIRED, function() {
                        expect($rootScope.user.userName).toEqual('testUserName');
                        expect($rootScope.user.authToken).toBeTruthy();
                        done();
                    });
                    $httpBackend.flush();
                });
            });
        });

    });

}());
