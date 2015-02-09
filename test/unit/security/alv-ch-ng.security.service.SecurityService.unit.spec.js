;(function() {
    describe("SecurityService", function() {

        var user = {
            userName: 'testUserName',
            roles: [
                { key: 'ROLE_TEST' },
                { key: 'ROLE_TEST2' }
            ],
            groups: [
                'group1',
                'group2'
            ],
            authToken: false
        };

        beforeEach(module('alv-ch-ng.security', function(AuthenticationServiceProvider) {
            AuthenticationServiceProvider.addAuthenticator('customAuthenticator', {
                authenticate: function(username, password, options) {
                    return options.name;
                }
            });
            AuthenticationServiceProvider.setAuthenticatorName('customAuthenticator');
            AuthenticationServiceProvider.setAuthenticatorOptionsFor('customAuthenticator', { name: 'customAuthenticator' });
        }));

        it('uses the AuthenticationService to log in.', function() {
            inject(function(SecurityService) {
                expect(SecurityService.login('testUserName', 'testUser')).toEqual('customAuthenticator');
            });
        });
        it('does nothing if the user is already logged in.', function() {
            inject(function($rootScope, SecurityService) {
                $rootScope.user = { username: 'testUser' };
                expect(SecurityService.login('testUserName', 'testUser')).toBeUndefined();
            });
        });
        it('uses the AuthenticationService to log out.', function() {
            inject(function($rootScope, SecurityService) {
                $rootScope.user = { username: 'testUser' };

                expect(SecurityService.logout()).toBeTruthy();
                expect($rootScope.user).toBeNull();
            });
        });
        it('does nothing if there\'s no authenticated user.', function() {
            inject(function($rootScope, SecurityService) {
                expect(SecurityService.logout()).toBeFalsy();
                expect($rootScope.user).toBeUndefined();
            });
        });

        it('checks if the user has a certain role.', function() {
            inject(function($rootScope, SecurityService) {
                expect(SecurityService.hasRole('ROLE_TEST')).toBeFalsy();
                expect(SecurityService.hasRole('UNKNOWN')).toBeFalsy();
                $rootScope.user = user;
                expect(SecurityService.hasRole('UNKNOWN')).toBeFalsy();
                expect(SecurityService.hasRole('ROLE_TEST')).toBeTruthy();
                expect(SecurityService.hasRole()).toBeTruthy();
                expect(SecurityService.hasRole('!ROLE_TEST')).toBeFalsy();
            });
        });

        it('checks if the user has any of a array of roles.', function() {
            inject(function($rootScope, SecurityService) {
                expect(SecurityService.hasAnyRole(['ROLE_TEST', 'ROLE_ADMIN'])).toBeFalsy();
                expect(SecurityService.hasAnyRole(['UNKNOWN', 'ROLE_ADMIN'])).toBeFalsy();
                $rootScope.user = user;
                expect(SecurityService.hasAnyRole('UNKNOWN')).toBeFalsy();
                expect(SecurityService.hasAnyRole(['ROLE_TEST', 'ROLE_ADMIN'])).toBeTruthy();
                expect(SecurityService.hasAnyRole()).toBeTruthy();
                expect(SecurityService.hasAnyRole(['!ROLE_TEST', 'ROLE_ADMIN'])).toBeFalsy();
            });
        });

        it('checks if the user has all of a array of roles.', function() {
            inject(function($rootScope, SecurityService) {
                expect(SecurityService.hasAllRoles(['ROLE_TEST', 'ROLE_TEST2', 'ROLE_ADMIN'])).toBeFalsy();
                expect(SecurityService.hasAllRoles(['UNKNOWN', 'ROLE_TEST2', 'ROLE_ADMIN'])).toBeFalsy();
                $rootScope.user = user;
                expect(SecurityService.hasAllRoles('UNKNOWN', 'ROLE_TEST2')).toBeFalsy();
                expect(SecurityService.hasAllRoles(['ROLE_TEST', 'ROLE_TEST2'])).toBeTruthy();
                expect(SecurityService.hasAllRoles()).toBeTruthy();
                expect(SecurityService.hasAllRoles(['!ROLE_TEST', 'ROLE_ADMIN', 'ROLE_TEST2'])).toBeFalsy();
            });
        });








        it('checks if the user has a certain group.', function() {
            inject(function($rootScope, SecurityService) {
                expect(SecurityService.hasGroup('group1')).toBeFalsy();
                expect(SecurityService.hasGroup('UNKNOWN')).toBeFalsy();
                $rootScope.user = user;
                expect(SecurityService.hasGroup('UNKNOWN')).toBeFalsy();
                expect(SecurityService.hasGroup('group1')).toBeTruthy();
                expect(SecurityService.hasGroup()).toBeTruthy();
                expect(SecurityService.hasGroup('!group1')).toBeFalsy();
            });
        });

        it('checks if the user has any of a array of groups.', function() {
            inject(function($rootScope, SecurityService) {
                expect(SecurityService.hasAnyGroup(['group1', 'ROLE_ADMIN'])).toBeFalsy();
                expect(SecurityService.hasAnyGroup(['UNKNOWN', 'ROLE_ADMIN'])).toBeFalsy();
                $rootScope.user = user;
                expect(SecurityService.hasAnyGroup('UNKNOWN')).toBeFalsy();
                expect(SecurityService.hasAnyGroup(['group1', 'ROLE_ADMIN'])).toBeTruthy();
                expect(SecurityService.hasAnyGroup()).toBeTruthy();
                expect(SecurityService.hasAnyGroup(['!group1', 'ROLE_ADMIN'])).toBeFalsy();
            });
        });

        it('checks if the user has all of a array of groups.', function() {
            inject(function($rootScope, SecurityService) {
                expect(SecurityService.hasAllGroups(['group1', 'group2', 'ROLE_ADMIN'])).toBeFalsy();
                expect(SecurityService.hasAllGroups(['UNKNOWN', 'group2', 'ROLE_ADMIN'])).toBeFalsy();
                $rootScope.user = user;
                expect(SecurityService.hasAllGroups('UNKNOWN', 'group2')).toBeFalsy();
                expect(SecurityService.hasAllGroups(['group1', 'group2'])).toBeTruthy();
                expect(SecurityService.hasAllGroups()).toBeTruthy();
                expect(SecurityService.hasAllGroups(['!group1', 'ROLE_ADMIN', 'group2'])).toBeFalsy();
            });
        });


    });

}());
