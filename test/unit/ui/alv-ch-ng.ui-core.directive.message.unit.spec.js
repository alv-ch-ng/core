;(function () {
    describe('message directive', function () {

        beforeEach(module('alv-ch-ng.ui-core', function () {
        }));

        it('replaces a message tag with a div element and matching css classes.',
            inject(function ($compile, $rootScope) {
                var scope = $rootScope.$new();
                // get an element representation
                var elem = angular.element('<message>test message</message>');
                $compile(elem)(scope);
                expect(elem.html()).toBe('<span class="ng-scope">test message</span>');
                expect(elem.hasClass('alert-info')).toBeTruthy();
            })
        );

        it('uses the severity set by the message-severity attribute.',
            inject(function ($compile, $rootScope) {
                var scope = $rootScope.$new();
                // get an element representation
                var elem = angular.element('<message message-severity="testSeverity">test message</message>');
                $compile(elem)(scope);
                expect(elem.hasClass('alert-testSeverity')).toBeTruthy();
            })
        );

        it('adds the "alert-dismissable" class and prepends a matching button if the message-dismissable attribute is set to true.',
            inject(function ($compile, $rootScope) {
                var scope = $rootScope.$new();
                // get an element representation
                var elem = angular.element('<message message-dismissable="true">test message</message>');
                $compile(elem)(scope);
                elem.find('button').each(function(index, item) {
                    expect(index).toBe(0);
                    expect($(item).hasClass('close')).toBeTruthy();
                });
                expect(elem.hasClass('alert-dismissable')).toBeTruthy();
            })
        );

        it('adds the dismissable text to the button if it is not empty',
            inject(function ($compile, $rootScope) {
                var scope = $rootScope.$new();
                // get an element representation
                var elem = angular.element('<message message-dismissable="true" message-dismissable-text="testButton">test message</message>');
                $compile(elem)(scope);

                elem.find('button').each(function(index, item) {
                    expect(index).toBe(0);
                    expect($(item).hasClass('close')).toBeTruthy();
                    expect($(item).hasClass('text-close')).toBeTruthy();
                    expect($(item).html()).toEqual('testButton');
                });
                expect(elem.hasClass('alert-dismissable')).toBeTruthy();
            })
        );


    });


}());

