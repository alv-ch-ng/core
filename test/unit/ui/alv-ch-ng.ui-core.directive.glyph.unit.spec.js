;(function() {

describe("glyph directive", function() {

    beforeEach(module('alv-ch-ng.ui-core', function() {}));

    it('replaces the element with a span with css classes \'glyphicon\' and  \'glyphicon-warning-sign\' and a \'ng-transclude\' attribute.',
        function() {
            inject(function ($compile, $rootScope) {
                var scope = $rootScope.$new();
                // get an element representation
                var elem = angular.element('<glyph>testContent</glyph>');
                // finally compile the HTML
                $compile(elem)(scope);
                expect(elem.children('glyphicon')).toBeTruthy();
                expect(elem.children('glyphicon-warning-sign')).toBeTruthy();
            });
        }
    );

    it('uses the right glyphicon if one is defined.',
        function() {
            inject(function ($compile, $rootScope) {
                var scope = $rootScope.$new();
                // get an element representation
                var elem = angular.element('<glyph icon="testglyph"></glyph>');
                // finally compile the HTML
                $compile(elem)(scope);
                expect(elem.children('glyphicon')).toBeTruthy();
                expect(elem.children('glyphicon-testglyph')).toBeTruthy();
            });
        }
    );

    });

}());
