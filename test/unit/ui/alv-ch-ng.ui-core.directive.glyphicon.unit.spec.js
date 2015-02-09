;(function() {

describe("glyph-icon directive", function() {

    beforeEach(module('alv-ch-ng.ui-core', function() {}));

        it('prepends a span with css classes \'glyphicon\' and  \'glyphicon-warning-sign\'.',
            function() {
                inject(function ($compile, $rootScope) {
                    var scope = $rootScope.$new();
                    // get an element representation
                    var elem = angular.element('<div glyph-icon>testContent</glyph>');
                    // finally compile the HTML
                    $compile(elem)(scope);
                    expect(elem.html()).toEqual('<span class="glyphicon glyphicon-warning-sign"></span>testContent');
                });
            }
        );

        it('appends a span with css classes \'glyphicon\' and  \'glyphicon-warning-sign\' when glyph-align is set to right.',
            function() {
                inject(function ($compile, $rootScope) {
                    var scope = $rootScope.$new();
                    // get an element representation
                    var elem = angular.element('<div glyph-icon glyph-align="right">testContent</glyph>');
                    // finally compile the HTML
                    $compile(elem)(scope);
                    expect(elem.html()).toEqual('testContent<span class="glyphicon glyphicon-warning-sign"></span>');
                });
            }
        );

        it('uses the icon that is defined in the \'glyph-icon\' attribute.',
            function() {
                inject(function ($compile, $rootScope) {
                    var scope = $rootScope.$new();
                    // get an element representation
                    var elem = angular.element('<div glyph-icon="testIcon">testContent</glyph>');
                    // finally compile the HTML
                    $compile(elem)(scope);
                    expect(elem.html()).toEqual('<span class="glyphicon glyphicon-testIcon"></span>testContent');
                });
            }
        );

        //=== ADMIN SYMBOLS

        it('renders a admin symbol: \'icon--exclam\'.',
            function() {
                inject(function ($compile, $rootScope) {
                    var scope = $rootScope.$new();
                    // get an element representation
                    var elem = angular.element('<div glyph-icon admin-symbol="true">testContent</glyph>');
                    // finally compile the HTML
                    $compile(elem)(scope);
                    expect(elem.html()).toEqual('<span class="icon icon--exclam" aria-hidden="true"></span>testContent');
                });
            }
        );

        it('renders a admin symbol: warning.  \'icon--exclam\' when glyph-align is set to right.',
            function() {
                inject(function ($compile, $rootScope) {
                    var scope = $rootScope.$new();
                    // get an element representation
                    var elem = angular.element('<div glyph-icon admin-symbol="true" glyph-align="right">testContent</glyph>');
                    // finally compile the HTML
                    $compile(elem)(scope);
                    expect(elem.html()).toEqual('testContent<span class="icon icon--exclam" aria-hidden="true"></span>');
                });
            }
        );

        it('renders a admin symbol: \'testIcon\'',
            function() {
                inject(function ($compile, $rootScope) {
                    var scope = $rootScope.$new();
                    // get an element representation
                    var elem = angular.element('<div glyph-icon="testIcon" admin-symbol="true">testContent</glyph>');
                    // finally compile the HTML
                    $compile(elem)(scope);
                    expect(elem.html()).toEqual('<span class="icon icon--testIcon" aria-hidden="true"></span>testContent');
                });
            }
        );

    });

}());
