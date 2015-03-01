;(function() {
    describe("button directive", function() {

        beforeEach(module('alv-ch-ng.core', function() {}));

        it('Adds css class \'btn-primary\' if attribute \'primary\' is true.',
            function() {
                inject(function ($compile, $rootScope) {
                    var scope = $rootScope.$new();
                    // get an element representation
                    var elem = angular.element('<button primary="true"></button>');
                    // finally compile the HTML
                    $compile(elem)(scope);
                    expect(elem.hasClass('btn-primary')).toBeTruthy();
                });
            }
        );

        it('Does nothing if attribute \'primary\' is false.',
            function() {
                inject(function ($compile, $rootScope) {
                    var scope = $rootScope.$new();
                    // get an element representation
                    var elem = angular.element('<button primary="false"></button>');
                    // finally compile the HTML
                    $compile(elem)(scope);
                    expect(elem.hasClass('btn-primary')).toBeFalsy();
                });
            }
        );

    });

}());
