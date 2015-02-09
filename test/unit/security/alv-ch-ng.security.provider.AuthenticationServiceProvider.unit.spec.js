;(function() {

    describe("AuthenticationServiceProvider", function() {
        var provider;

        beforeEach(module('alv-ch-ng.security', function(AuthenticationServiceProvider) {
            provider = AuthenticationServiceProvider;
        }));

        it('provides a setter method for constants', inject(function() {
            expect(angular.isFunction(provider.setConstants)).toBeTruthy();
        }));

        it('provides a method to add new authenticators.', inject(function() {
            expect(angular.isFunction(provider.addAuthenticator)).toBeTruthy();
        }));

        it('provides a setter method for the name of the authenticator to use', inject(function() {
            expect(angular.isFunction(provider.setAuthenticatorName)).toBeTruthy();
        }));

        it('provides a setter method for authenticator options.', inject(function() {
            expect(angular.isFunction(provider.setAuthenticatorOptionsFor)).toBeTruthy();
        }));

    });
}());
