;(function () {
    describe('alert directive', function () {

        beforeEach(module('alv-ch-ng.core', function () {
        }));

        it('replaces a alert tag with a div element and matching css classes.',
            inject(function ($compile, $rootScope) {
                var scope = $rootScope.$new();
                // get an element representation
                var elem = angular.element('<alert>test alert</alert>');
                $compile(elem)(scope);
                expect(elem.hasClass('alert-info')).toBeTruthy();
                expect(elem).toContainText('test alert');
            })
        );

        it('uses the severity set by the alert-severity attribute.',
            inject(function ($compile, $rootScope) {
                var scope = $rootScope.$new();
                // get an element representation
                var elem = angular.element('<alert alert-severity="testSeverity">test alert</alert>');
                $compile(elem)(scope);
                expect(elem.hasClass('alert-testSeverity')).toBeTruthy();
            })
        );

        it('adds the "alert-dismissable" class and prepends a matching button if the alert-dismissable attribute is set to true.',
            inject(function ($compile, $rootScope) {
                var scope = $rootScope.$new();
                // get an element representation
                var elem = angular.element('<alert alert-dismissable="true">test alert</alert>');
                $compile(elem)(scope);
                elem.find('button').each(function(index, item) {
                    expect(index).toBe(0);
                    expect($(item).hasClass('close')).toBeTruthy();
                });
                expect(elem.hasClass('alert-dismissable')).toBeTruthy();
            })
        );

        it('dont adds the "alert-dismissable" class f the alert-dismissable attribute is set to false.',
            inject(function ($compile, $rootScope) {
                var scope = $rootScope.$new();
                // get an element representation
                var elem = angular.element('<alert alert-dismissable="false">test alert</alert>');
                $compile(elem)(scope);
                expect(elem.hasClass('alert-dismissable')).toBeFalsy();
            })
        );

        it('adds the dismissable text to the button if it is not empty',
            inject(function ($compile, $rootScope) {
                var scope = $rootScope.$new();
                // get an element representation
                var elem = angular.element('<alert alert-dismissable="true" alert-dismissable-text="testButton">test alert</alert>');
                $compile(elem)(scope);

                expect(elem.hasClass('alert-dismissable')).toBeTruthy();
                expect(elem.find('button.close')).toContainText('testButton');
                expect(elem.find('button.text-close')).toContainText('testButton');
            })
        );

        it('adds a dismissable function',
            inject(function ($compile, $rootScope) {
                var scope = $rootScope.$new();
                // get an element representation
                var elem = angular.element('<alert alert-dismissable="testDismiss()">test alert</alert>');
                $compile(elem)(scope);

                expect(elem.hasClass('alert-dismissable')).toBeTruthy();
                elem.find('button').each(function(index, item) {
                    expect(index).toBe(0);
                    expect($(item).hasClass('close')).toBeTruthy();
                    expect($(item).attr('ng-click')).toBe('testDismiss()');
                });
            })
        );

        it('overlay alert',
            inject(function ($compile, $rootScope) {
                var scope = $rootScope.$new();
                // get an element representation
                var elem = angular.element('<alert alert-overlay="true">test alert</alert>');
                $compile(elem)(scope);

                expect(elem).toContainText('test alert');
                expect(elem.hasClass('alert-info')).toBeTruthy();
                expect(elem.hasClass('alert-info')).toBeTruthy();
                expect(elem.attr('style')).toBeTruthy();
            })
        );

        it('alert-dismissable-on-timeout',
            inject(function ($compile, $rootScope, $timeout) {
                var scope = $rootScope.$new();
                // get an element representation
                scope.testTrigger=false;
                var elem = angular.element('<alert alert-dismissable-on-timeout="1000" alert-dismissable-trigger="testTrigger">test alert</alert>');
                $compile(elem)(scope);
                scope.$digest();

                expect(elem).toContainText('test alert');

                scope.testTrigger=true;
                scope.$digest();
                $timeout.flush();

                expect(scope.testTrigger).toBeFalsy();


            })
        );

        it('alert-dismissable-on-timeout without params',
            inject(function ($compile, $rootScope) {
                var scope = $rootScope.$new();
                // get an element representation
                var elem = angular.element('<alert alert-dismissable-on-timeout alert-dismissable-trigger>test alert</alert>');
                $compile(elem)(scope);
                scope.$digest();

                expect(elem).toContainText('test alert');
            })
        );
    });


}());

