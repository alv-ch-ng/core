;(function() {
    describe("marker directive", function() {

        beforeEach(module('alv-ch-ng.core', function() {}));

        describe('with element marker', function() {

            it('replaces the element with a span with css class \'label-default\' and a \'ng-transclude\' attribute.',
                function() {
                    inject(function ($compile, $rootScope) {
                        var scope = $rootScope.$new();
                        var elem = angular.element('<marker><div>testContent</div></marker>');
                        $compile(elem)(scope);
                        expect(elem.hasClass('label')).toBeTruthy();
                        expect(elem.hasClass('label-default')).toBeTruthy();
                        expect(elem.html()).toEqual('<div class="ng-scope">testContent</div>');
                    });
                }
            );

            it('adds css class label-{severity} if attribute \'marker-severity\' is set.',
                function() {
                    inject(function ($compile, $rootScope) {
                        var scope = $rootScope.$new();
                        var elem = angular.element('<marker marker-severity="warning"><div>testContent</div></marker>');
                        $compile(elem)(scope);
                        expect(elem.hasClass('label')).toBeTruthy();
                        expect(elem.hasClass('label-warning')).toBeTruthy();
                    });
                }
            );

            it('adds css class squared if attribute \'marker-squared\' is set to true.',
                function() {
                    inject(function ($compile, $rootScope) {
                        var scope = $rootScope.$new();
                        var elem = angular.element('<marker marker-squared="true"><div>testContent</div></marker>');
                        $compile(elem)(scope);
                        expect(elem.hasClass('label')).toBeTruthy();
                        expect(elem.hasClass('squared')).toBeTruthy();
                    });
                }
            );
        });

        describe('with attribute marker', function() {

            it('appends a span-element with css classes \'label\' and \'label-default\'  attribute.',
                function() {
                    inject(function ($compile, $rootScope) {
                        var scope = $rootScope.$new();
                        var elem = angular.element('<div marker="testContent"><div>anotherTestContent</div></marker>');
                        $compile(elem)(scope);
                        elem.find('span').each(function(index, item) {
                            expect($(item).hasClass('label')).toBeTruthy();
                            expect($(item).hasClass('label-default')).toBeTruthy();
                            expect($(item).html()).toEqual('testContent');
                        });
                        elem.find('div').each(function(index, item) {
                            expect($(item).html()).toEqual('anotherTestContent');
                        });
                    });
                }
            );

            it('adds css class label-{severity} if attribute \'marker-severity\' is set.',
                function() {
                    inject(function ($compile, $rootScope) {
                        var scope = $rootScope.$new();
                        var elem = angular.element('<div marker="testContent" marker-severity="warning"><div>anotherTestContent</div></marker>');
                        $compile(elem)(scope);
                        elem.find('span').each(function(index, item) {
                            expect($(item).hasClass('label')).toBeTruthy();
                            expect($(item).hasClass('label-warning')).toBeTruthy();
                            expect($(item).html()).toEqual('testContent');
                        });
                        elem.find('div').each(function(index, item) {
                            expect($(item).html()).toEqual('anotherTestContent');
                        });
                    });
                }
            );

            it('adds css class squared if attribute \'marker-squared\' is set to true.',
                function() {
                    inject(function ($compile, $rootScope) {
                        var scope = $rootScope.$new();
                        var elem = angular.element('<div marker="testContent" marker-squared="true"><div>anotherTestContent</div></marker>');
                        $compile(elem)(scope);
                        elem.find('span').each(function(index, item) {
                            expect($(item).hasClass('label')).toBeTruthy();
                            expect($(item).hasClass('squared')).toBeTruthy();
                            expect($(item).html()).toEqual('testContent');
                        });
                        elem.find('div').each(function(index, item) {
                            expect($(item).html()).toEqual('anotherTestContent');
                        });
                    });
                }
            );
        });

    });

}());
