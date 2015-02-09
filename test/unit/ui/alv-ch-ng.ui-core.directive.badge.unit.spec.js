;(function() {
    describe("badge directive", function() {

        beforeEach(module('alv-ch-ng.ui-core', function() {}));

        describe('with element marker', function() {

            it('replaces the element with a span with css class \'badge\' and a \'ng-transclude\' attribute.',
                function() {
                    inject(function ($compile, $rootScope) {
                        var scope = $rootScope.$new();
                        // get an element representation
                        var elem = angular.element('<badge>testContent</bagde>');
                        // finally compile the HTML
                        $compile(elem)(scope);
                        expect(elem.hasClass('badge')).toBeTruthy();
                    });
                }
            );

            it('adds css class \'pull-right\' if attribute \'badge-align\' is set to right.',
                function() {
                    inject(function ($compile, $rootScope) {
                        var scope = $rootScope.$new();
                        // get an element representation
                        var elem = angular.element('<badge badge-align="right">testContent</badge>');
                        // finally compile the HTML
                        $compile(elem)(scope);
                        expect(elem.hasClass('badge')).toBeTruthy();
                        expect(elem.hasClass('pull-right')).toBeTruthy();
                    });
                }
            );

            it('adds css class \'squared\' if attribute \'badge-squared\' is set to true.',
                function() {
                    inject(function ($compile, $rootScope) {
                        var scope = $rootScope.$new();
                        // get an element representation
                        var elem = angular.element('<badge badge-squared="true">testContent</bagde>');
                        // finally compile the HTML
                        $compile(elem)(scope);
                        expect(elem.hasClass('badge')).toBeTruthy();
                        expect(elem.hasClass('squared')).toBeTruthy();
                    });
                }
            );
        });

        describe('with attribute marker', function() {
            it('appends a badge element to the marked element.',
                function() {
                    inject(function ($compile, $rootScope) {
                        var scope = $rootScope.$new();
                        // get an element representation
                        var elem = angular.element('<div badge>testContent</div>');
                        // finally compile the HTML
                        $compile(elem)(scope);
                        elem.children().each(function(index, item) {
                            expect(index).toEqual(0);
                            expect($(item).hasClass('badge')).toBeTruthy();
                        });
                    });
                }
            );

            it('adds css class \'pull-right\' if attribute \'badge-align\' is set to right.',
                function() {
                    inject(function ($compile, $rootScope) {
                        var scope = $rootScope.$new();
                        // get an element representation
                        var elem = angular.element('<div badge badge-align="right">testContent</div>');
                        // finally compile the HTML
                        $compile(elem)(scope);
                        elem.children().each(function(index, item) {
                            expect($(item).hasClass('pull-right')).toBeTruthy();
                        });
                    });
                }
            );

            it('adds css class \'squared\' if attribute \'badge-squared\' is set to true.',
                function() {
                    inject(function ($compile, $rootScope) {
                        var scope = $rootScope.$new();
                        // get an element representation
                        var elem = angular.element('<div badge badge-squared="true">testContent</div>');
                        // finally compile the HTML
                        $compile(elem)(scope);
                        expect(elem.hasClass('squared')).toBeTruthy();
                    });
                }
            );
        });

    });

}());
